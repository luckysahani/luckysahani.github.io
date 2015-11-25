import heapq, time, sys, csv

class node(object):
	def __init__(self, Region = None, index = None, father = None, MinKey = None, MaxKey = None, Children = None, prob = 1):
		self.Region = Region
		self.index = index
		self.father = father
		self.MinKey = NumMinKey
		self.MaxKey = NumMaxKey
		self.Children = []
		self.prob = prob

def RegionArea(Region):
	Area = 1
	for i in range(NumDimension):
		minstr = str(i) + 'min'
		maxstr = str(i) + 'max'
		Area *= Region[maxstr] - Region[minstr]
	return Area
	pass

def IncreasedRegion(Region1, Region2):
	EnclosingDict = dict.fromkeys(DefaultKeys, None)
	for i in range(NumDimension):
		minstr = str(i) + 'min'
		maxstr = str(i) + 'max'
		EnclosingDict[minstr] = min(Region1[minstr], Region2[minstr])
		EnclosingDict[maxstr] = max(Region1[maxstr], Region2[maxstr])
	X = RegionArea(EnclosingDict)
	Y = RegionArea(Region1)
	return X - Y
	pass

def MergeRegion(Region1, Region2):
	if Region1 == None:
		return Region2
	elif Region2 == None:
		return Region1
	else:
		EnclosingDict = dict.fromkeys(DefaultKeys, None)
		for i in range(NumDimension):
			minstr = str(i) + 'min'
			maxstr = str(i) + 'max'
			EnclosingDict[minstr] = min(Region1[minstr], Region2[minstr])
			EnclosingDict[maxstr] = max(Region1[maxstr], Region2[maxstr])    
		return EnclosingDict
	pass

def ChooseLeaf(root, node):
	if len(root.Children) == 0:
		return root
	elif len(root.Children[0].Children) == 0:
		return root
	else:
		TempIndex = 0
		Best = float("inf")
		for i in range(len(root.Children)):
			if IncreasedRegion(root.Children[i].Region, node.Region) < Best:
				Best = IncreasedRegion(root.Children[i].Region, node.Region)
				TempIndex = i
		return ChooseLeaf(root.Children[TempIndex], node)
	pass

def SplitNode(Node):
	if Node.father == None:
		Node.father = node()
		Node.father.Children.append(Node)

	Child1 = node(father = Node.father)
	Child2 = node(father = Node.father)
	SeedList = PickSeeds(Node, Child1, Child2)
	Seed2 = Node.Children.pop(SeedList[1])
	Seed1 = Node.Children.pop(SeedList[0])
	Child1.Children.append(Seed1)
	Child2.Children.append(Seed2)
	Seed1.father = Child1
	Seed2.father = Child2
	Child1.Region = MergeRegion(Child1.Region, Seed1.Region)
	Child2.Region = MergeRegion(Child2.Region, Seed2.Region)
	while len(Node.Children) > 0:
		Next = PickNext(Node, Child1, Child2)
		if len(Child1.Children) > len(Child2.Children) and len(Child2.Children) + len(Node.Children) == Node.MinKey:
			for child in Node.Children:
				Child2.Region = MergeRegion(Child2.Region, child.Region)
				Child2.Children.append(child)
				child.father = Child2
			Node.Children = []
			break
		if len(Child2.Children) > len(Child1.Children) and len(Child1.Children) + len(Node.Children) == Node.MinKey:
			for child in Node.Children:
				Child1.Region = MergeRegion(Child1.Region, child.Region)
				Child1.Children.append(child)
				child.father = Child1
			Node.Children = []
			break
		if Next[1] == 1:
			child = Node.Children.pop(Next[0])
			Child2.Region = MergeRegion(Child2.Region, child.Region)
			child.father = Child2
			Child2.Children.append(child)
		else:
			child = Node.Children.pop(Next[0])
			Child1.Region = MergeRegion(Child1.Region, child.Region)
			child.father = Child1
			Child1.Children.append(child)
	Node.father.Children.remove(Node)
	Node.father.Children.append(Child1)
	Node.father.Children.append(Child2)
	Node.father.Region = MergeRegion(Node.father.Region, Child1.Region)
	Node.father.Region = MergeRegion(Node.father.Region, Child2.Region)
	CalculateNodeProb(Child1)
	CalculateNodeProb(Child2)
	pass

def PickNext(node, Child1, Child2):
	WhichChild = 0
	Index = 0
	MaxDiffArea = 0
	for i in range(len(node.Children)):
		Temp1 = IncreasedRegion(Child1.Region, node.Children[i].Region)
		Temp2 = IncreasedRegion(Child2.Region, node.Children[i].Region)        
		if abs(Temp1 - Temp2) > MaxDiffArea:
			MaxDiffArea = abs(Temp1 - Temp2)
			Index = i
			if Temp1 - Temp2 > 0:
				WhichChild = 1
			else:
				WhichChild = 0
	return [Index, WhichChild]
	pass

def PickSeeds(node, Child1, Child2):
	Index1 = 0
	Index2 = 0
	MaxArea = 0
	for i in range(len(node.Children)):
		for j in range(i + 1, len(node.Children)):
			if RegionArea(MergeRegion(node.Children[i].Region, node.Children[j].Region)) - RegionArea(node.Children[i].Region) - RegionArea(node.Children[j].Region) > MaxArea:
				Index1 = i
				Index2 = j
				MaxArea = RegionArea(MergeRegion(node.Children[i].Region, node.Children[j].Region)) - RegionArea(node.Children[i].Region) - RegionArea(node.Children[j].Region)
	return [Index1, Index2]
	pass

def CalculateNodeProb(node):
	maxprob = 0
	for child in node.Children:
		if child.prob > maxprob:
			maxprob = child.prob
	node.prob = maxprob
	pass


def AdjustTree(node):
	Temp = node
	while Temp != None:
		if len(Temp.Children) > Temp.MaxKey:
			SplitNode(Temp)

		else:
			CalculateNodeProb(Temp)
			if Temp.father != None:
				Temp.father.Region = MergeRegion(Temp.father.Region, Temp.Region)
		Temp = Temp.father
	return
	pass

def Insert(root, node):
	NodeToInsert = ChooseLeaf(root, node)
	node.father = NodeToInsert
	NodeToInsert.Children.append(node)
	NodeToInsert.Region = MergeRegion(NodeToInsert.Region, node.Region)
	AdjustTree(NodeToInsert)
	if root.father != None:
		root = root.father
	return root
	pass

def Mindist(Region):
	Distance = 0
	for i in range(NumDimension):
		key = str(i) + 'min'
		Distance += Region[key]
	return Distance
	pass

def MinList(Region):
	TempList = []
	for i in range(NumDimension):
		key = str(i) + 'min'
		TempList.append(Region[key])
	return TempList
	pass

def IsDominate(pointList, elementList):
	for i in range(NumDimension):
		if elementList[i] < pointList[i]:
			return False
	return True
	pass

def Dominate(element):
	global NumofComp
	elementList = MinList(element.Region)
	for point in SkylinePoints:
		NumofComp += 1
		pointList = MinList(point.Region)
		if IsDominate(pointList, elementList):
			return True
	return False    
	pass

def BBS(root):
	for child in root.Children:
		heapq.heappush(Heap, (Mindist(child.Region), child))
	while True:
		try:
			element = heapq.heappop(Heap)[1]
			if Dominate(element):
				continue
			elif len(element.Children) != 0:
				for child in element.Children:
					if not Dominate(child):
						heapq.heappush(Heap, (Mindist(child.Region),child))
			else:
				SkylinePoints.append(element)

		except:
			# print "GG"
			# for points in SkylinePoints:
			#     print points.Region
			# print len(SkylinePoints)
			break
	pass

def MINDISTNN(point, rectangle):
	ans = 0
	for i in range(NumDimension):
		mindim = str(i) + 'min'
		maxdim = str(i) + 'max'
		pi = point[mindim]
		if pi < rectangle[mindim]:
			ri = rectangle[mindim]
		elif pi >  rectangle[maxdim]:
			ri = rectangle[maxdim]
		else:
			ri = pi
		ans += (pi - ri) ** 2
	return ans    
	pass

def MAXDISTNN(point, rectangle):
	ans = 0
	for i in range(NumDimension):
		mindim = str(i) + 'min'
		maxdim = str(i) + 'max'
		pi = point[mindim]
		if pi < (rectangle[mindim] + rectangle[maxdim])/2:
			ri = rectangle[maxdim]
		# elif pi >  rectangle[maxdim]:
			# ri = rectangle[maxdim]
		else:
			ri = rectangle[mindim]
		ans += (pi - ri) ** 2
	return ans    
	pass



# def MINMAXDISTNN(point, rectangle):
#     ans = float("inf")
#     for i in range(NumDimension):
#         temp = 0
#         mindim = str(i) + 'min'
#         maxdim = str(i) + 'max'
#         pi = point[mindim]
#         if pi <= (rectangle[mindim] + rectangle[maxdim])/2:
#             temp += (pi - rectangle[mindim]) ** 2
#         else:
#             temp += (pi - rectangle[maxdimdim]) ** 2
#         for j in range(NumDimension):
#             if i != j:
#                 mindim = str(j) + 'min'
#                 maxdim = str(j) + 'max'
#                 pi = point[mindim]
#                 if pi >= (rectangle[mindim] + rectangle[maxdim])/2:
#                     temp += (pi - rectangle[mindim]) ** 2
#                 else:
#                     temp += (pi - rectangle[maxdimdim]) ** 2
#         if temp < ans:
#             ans = temp

#     return ans
#     pass

def MINMAXDISTNNalternative(point, rectangle):
	S = 0
	for i in range(NumDimension):
		mindim = str(i) + 'min'
		maxdim = str(i) + 'max'
		pi = point[mindim]
		if pi < (rectangle[mindim] + rectangle[maxdim])/2:
			ri = rectangle[maxdim]
		else:
			ri = rectangle[mindim]
		S += (pi - ri) ** 2
	ans = float("inf")
	for k in range(NumDimension):
		mindim = str(k) + 'min'
		maxdim = str(k) + 'max'
		pi = point[mindim]
		if pi <= (rectangle[mindim] + rectangle[maxdim])/2:
			rmk = rectangle[mindim]
		else:
			rmk = rectangle[maxdim]
		if pi >= (rectangle[mindim] + rectangle[maxdim])/2:
			rMk = rectangle[mindim]
		else:
			rMk = rectangle[maxdim]
		temp = S - (pi - rMk) ** 2 + (pi - rmk) ** 2
		if temp < ans:
			ans = temp
	return ans
	pass

# def pruneNN(ABL):
#     list2 = ABL
#     list3 = ABL.sort(key= lambda x: x[3])
#     for element in list3:
#         toprune = (element[0],element[3])
#         flag = 0
#         for element2 in list2:
#             if 

#     pass

# def pruneNNquad(ABL):
#     indexlist = []
#     for i in range(len(ABL)):
#         for j in range(i+1, len(ABL)):
#             if ABL[i][3] < ABL[j][2]:
#                 indexlist.append(j)
#             else:
#                 if ABL[j][3] < ABL[i][2]:
#                     indexlist.append(i)
#     i = len(ABL)-1
#     while i >= 0:
#         if i in indexlist:
#             ABL.pop(i)
#         i = i - 1
#     return ABL
#     pass

def pruneNNnew(ABL):
	min_minmaxdist = min(ABL, key = lambda x: x[3])[3]
	# print min_minmaxdist
	if len(ABL) == 1:
		return ABL
	prune_index = 0
	for index, item in enumerate(ABL):
		if item[2] > min_minmaxdist:
			prune_index = index
			break
	# print prune_index
	# print ABL[0: prune_index][0][1].Region
	return ABL[0: prune_index]
	pass

def objectdistance(point, Object):
	ans = 0
	for i in range(NumDimension):
		mindim = str(i)+"min"
		ans += (point[mindim] - Object[mindim]) ** 2
	return ans
	pass

def pruneNNafter(ABL, i):
	global NN
	temp = NN[-1][1]
	# min_minmaxdist = min(ABL, key = lambda x: x[3])
	# indexlist = []
	prune_index = i + 1
	j = i + 1
	while j < len(ABL):
		if ABL[j][2] > temp:
			prune_index = j
			break
	# print ABL[0: prune_index]
	return ABL[0: prune_index]

def makeRtree(filename):
	global Root
	with open(filename,'r') as csvfile:
		f = csv.reader(csvfile, delimiter=',', quotechar='"')
		for Object in f:
			# print Object
			Object2 = [float(Object[i].strip()) for i in Dimension]
			i = 0
			TempDict = {}
			TempDict = dict.fromkeys(DefaultKeys, None)
			while i < NumDimension:
				key0 = str(i) + 'min'
				key1 = str(i) + 'max'
				TempDict[key0] = Object2[i]
				TempDict[key1] = Object2[i]
				i += 1
			Root = Insert(Root, node(Region = TempDict, index = int(Object[0]), prob = float(Object[-2])))
	pass

# def makeRtree(filename):
# 	global Root
# 	with open(filename,'r') as f:
# 		for Object in f:
# 			Object = Object.strip().split(",")
# 			# Object2 = [float(Object[i].strip()) for i in Dimension]
# 			Object2 = [float(Object[-4]), float(Object[-3])]
# 			i = 0
# 			TempDict = {}
# 			TempDict = dict.fromkeys(DefaultKeys, None)
# 			while i < NumDimension:
# 				key0 = str(i) + 'min'
# 				key1 = str(i) + 'max'
# 				TempDict[key0] = Object2[i]
# 				TempDict[key1] = Object2[i]
# 				i += 1
# 			Root = Insert(Root, node(Region = TempDict, index = int(Object[0]), prob = float(Object[-2])))
# 	pass

def InsertSortedNN(tup):
	global NN, k
	dis = tup[1]
	# print tup
	# print dis, tup[0]
	temp = 0
	for index, item in enumerate(NN):
		if item[1] > dis:
			temp = index
			break
	print NN
	NN.insert(temp, tup)       
	# if len(NN) < k:
	#     NN.insert(temp, tup)
	# else:
	#     NN.insert(temp, tup)
	#     del NN[-1]    
	# print NN
	pass

def NNall(Root, point):
	global NN
	# print DiskPageSize
	# print len(Root.Children)
	if len(Root.Children) == 0:
		print "root is empty"
	elif len(Root.Children[0].Children) == 0:
	# if len(Root.Children[0].Children) == 0:
		# At leaf level
		for child in Root.Children:
			# print child.Region
			# InsertSortedNN((child.Region, objectdistance(point, child.Region)))
			# print child.Region, objectdistance(point, child.Region)
			NN.append((child, objectdistance(point, child.Region)))
			# tempdist = objectdistance(point, child.Region)
			# if(tempdist < NearestPointDistances):
			#     NearestPointDistances = tempdist
			#     NearestPoint = child.Region
	else: 
		# print Root.Region
		ABL = []
		i = 1
		for child in Root.Children:
			# print child.Region
			ABL.append((i,child, MINDISTNN(point,child.Region), MINMAXDISTNNalternative(point, child.Region)))
			i += 1
		# ABL.sort(key= lambda x: x[2])
		# print ABL
		# print ABL[0][2],ABL[0][3],ABL[1][2],ABL[1][3]
		# ABL = pruneNNnew(ABL)
		# length = len(ABL)
		# # print length
		# # print ABL[0][1].Children[0].Children[0]
		# i = 0
		# while i < length:
		#     NNall(ABL[i][1], point)
		#     # ABL = pruneNNafter(ABL,i)
		#     length = len(ABL)
		#     i += 1
		for item in ABL:
			NNall(item[1],point)
	pass

# def PNN(p):
#     global NN
#     index = 0
#     while p > 0 and index < len(NN):
#         x = NN[index]
#         print (x[0].Region, p * x[0].prob)
#         p = p * (1 - x[0].prob)
#         index += 1
#     pass

# def PNNThres(p):
#     global NN,k
#     index = 0
#     while p >= k and index < len(NN):
#         x = NN[index]
#         if p * x[0].prob >= k:
#             print (x[0].Region, p * x[0].prob)
#         p = p * (1 - x[0].prob)
#         index += 1
#     pass

def insertsorted(minheap, x):
	index = 0
	while index < len(minheap):
		if x[1] > minheap[index][1]:
			break
		index += 1
	minheap.insert(index, x)
	# print minheap
	return minheap
	pass

# def PNNRank(p):
#     global NN,k
#     minheap = []
#     pm = 0
#     index = 0
#     while p >= pm and index <len(NN):
#         x = NN[index]
#         if p * x[0].prob >= pm:
#             minheap = insertsorted(minheap, (x[0], p * x[0].prob))
#             # print minheap
#             if len(minheap) < k:
#                 pm = 0
#             else:
#                 pm = minheap[k-1][0].prob
#         p = p * (1 - x[0].prob)
#         index += 1
#     print [(i[0].Region, i[1]) for i in minheap[0:int(k)]]
#     pass

def PNNIncRank(root, point):
	global k,queue, returnList
	heapq.heappush(queue, (0,Root))
	minheap = []
	p = 1
	pm = 0
	index = 0
	while p >= pm and len(queue) > 0:
		y = IncNN(root, point)   
		x = y[1]
		if p * x.prob >= pm:
			minheap = insertsorted(minheap, (x, p * x.prob,y[0]))
			# print minheap
			if len(minheap) < k:
				pm = 0
			else:
				pm = minheap[k-1][1]
		p = p * (1 - x.prob)
		index += 1
	a = minheap[0:int(k)]
	a.sort(key = lambda x:x[1], reverse = True)
	# a = [(i[0].Region, i[1]) for i in minheap[0:int(k)]]
	for item in a:
		# print item[0].index, item[1], item[2]
		returnList.append(item[0].index)
	pass

def PNNIncThres(root, point):
	global k,queue, returnList
	heapq.heappush(queue, (0,Root))
	p = 1
	minheap = []
	index = 0
	while p >= k and len(queue) > 0:
		gg = IncNN(root, point)
		x = gg[1]
		if p * x.prob >= k:
			# print (x[0].Region, p * x[0].prob)
			# print x.index, p * x.prob, gg[0]
			# returnList.append(x.index)
			minheap.append([x.index, p * x.prob, gg[0]])
		p = p * (1 - x.prob)

	minheap.sort(key = lambda x:x[1], reverse = True)
	for item in minheap:
		print item[0],item[1]
		returnList.append(item[0])
	pass

def IncNN(root, point):
	global queue
	while len(queue) != 0:
		element = heapq.heappop(queue)
		if len(element[1].Children) == 0:
			# print element[1].Region
			return element
		# elif len(element[1].Children[0].Children) == 0:
		# 	for child in element[1].Children:
		# 		heapq.heappush(queue, (objectdistance(point,child.Region),child))
		else:
			for child in element[1].Children:
				heapq.heappush(queue, (MINDISTNN(point,child.Region),child))
	pass

def PickAndRemove():
	global discarded
	minindex = 0
	temp = discarded[0][0]
	for index, item in enumerate(discarded):
		if item[0] < temp:
			minindex = index
	return discarded.pop(index)
	pass

def CalculatePminmax(p,x):
	global discarded
	p_xmin = p * x.prob
	p_xmax = p * x.prob
	for item in discarded:
		if item[0] <= objectdistance(x.Region, QueryDict):
			p_xmin = p_xmin * (1 - item[1].prob)**len(item[1].Children)
	for item in discarded:
		if MAXDISTNN(QueryDict, item[1].Region) <= objectdistance(x.Region, QueryDict):
			p_xmax = p_xmax * (1 - item[1].prob)
	return [p_xmin, p_xmax]
	pass


def PNNIncAugThres(root, point):
	global queue, k, discarded, returnList
	heapq.heappush(queue, (0,Root))
	minheap = []
	p = 1
	while p >= k and len(queue) > 0:
		gg = IncNNAugThres(root, point, p)
		x = gg[1]
		temp = CalculatePminmax(p,x)
		p_xmin = temp[0]
		p_xmax = temp[1] 
		while p_xmin < k <= p_xmax:
			E = PickAndRemove()
			if len(E[1].Children) == 0:
				p = p * (1 - E[1].prob)
			else:
				for child in E[1].Children:
					discarded.append((MINDISTNN(point, child.Region), child))
			temp = CalculatePminmax(p,x)
			p_xmin = temp[0]
			p_xmax = temp[1] 
		if p_xmin >= k:
			# print x.index, p_xmin, p_xmax, gg[0]
			minheap.append([x.index, p_xmin, p_xmax, gg[0]])
		p = p * (1 - x.prob)
	minheap.sort(key = lambda x:x[1], reverse = True)
	for item in minheap:
		returnList.append(item[0])
	pass

def PNNIncAugRank(root, point):
	global queue, k, discarded, returnList
	heapq.heappush(queue, (0,Root))
	minheap = []
	p = 1
	pm = 0
	hflag = 0
	lflag = 0
	while p >= pm and len(queue) > 0:
		gg = IncNNAug(root, point, p, pm)
		x = gg[1]
		temp = CalculatePminmax(p,x)
		p_xmin = temp[0]
		p_xmax = temp[1] 
		while p_xmin < pm <= p_xmax:
			E = PickAndRemove()
			lflag = 1
			if len(E[1].Children) == 0:
				p = p * (1 - E[1].prob)
				# Do something
				for index,item in enumerate(minheap):
					if objectdistance(E[1].Region, QueryDict) <= objectdistance(item[0].Region):
						item[3] = item[3] * (1 - E[1].prob)
						hflag = 1
			else:
				for child in E[1].Children:
					discarded.append((MINDISTNN(point, child.Region), child))
					lflag = 1
			temp = CalculatePminmax(p,x)
			p_xmin = temp[0]
			p_xmax = temp[1]
		if p_xmin > pm:
			minheap = insertsorted(minheap, [x,p_xmin,p_xmax,p,gg[0]])
			hflag = 1
		if hflag == 1 or lflag == 1:
			for item in minheap:
				temp = CalculatePminmax(item[3],item[0])
				item[1] = temp[0]
				item[2] = temp[1]
			if len(minheap) < k:
				pm = 0
			else:
				pm = minheap[k-1][1]
			temp = []
			for index, item in enumerate(minheap):
				if item[2] < pm:
					temp.append(index)
			temp.sort(reverse = True)
			for index in temp:
				minheap.pop(index)
		hflag = 0 
		lflag = 0
		p = p * (1 - x.prob)

	while len(minheap) > 0 and len(discarded) > 0:
		E = PickAndRemove()
		lflag = 1
		if len(E[1].Children) == 0:
			p = p * (1 - E[1].prob)
			# Do something
			for index,item in enumerate(minheap):
				if objectdistance(E[1].Region, QueryDict) <= objectdistance(item[0].Region):
					item[3] = item[3] * (1 - E[1].prob)
					hflag = 1
		else:
			for child in E[1].Children:
				discarded.append((MINDISTNN(point, child.Region), child))
				lflag = 1
		temp = CalculatePminmax(p,x)
		p_xmin = temp[0]
		p_xmax = temp[1]

		for item in minheap:
			temp = CalculatePminmax(item[3],item[0])
			item[1] = temp[0]
			item[2] = temp[1]
		if len(minheap) < k:
			pm = 0
		else:
			pm = minheap[k-1][1]
		temp = []
		for index, item in enumerate(minheap):
			if item[2] < pm:
				temp.append(index)
		temp.sort(reverse = True)
		for index in temp:
			minheap.pop(index)
		maxdist = 0
		for item in minheap:
			if objectdistance(QueryDict, item[0].Region) > maxdist:
				maxdist = objectdistance(QueryDict, item[0].Region)
		temp = []
		for index,item in enumerate(discarded):
			if item[0] > maxdist:
				temp.append(index)
		temp.sort(reverse = True)
		for index in temp:
			discarded.pop(index)
	a = minheap[0:int(k)]
	a.sort(key = lambda x:x[1], reverse = True)
	# a = [(i[0].Region, i[1]) for i in minheap[0:int(k)]]
	for item in a:
		# print item[0].index, item[1], item[2]
		returnList.append(item[0].index)
	pass


def IncNNAugThres(root, point, pfirst):
	global queue, discarded, k
	while len(queue) != 0:
		element = heapq.heappop(queue)
		if len(element[1].Children) == 0:
			return element
		else:
			if pfirst * element[1].prob < k:
				discarded.append(element)
			else:
				for child in element[1].Children:
					heapq.heappush(queue, (MINDISTNN(point,child.Region),child))

def IncNNAug(root, point, pfirst, pm):
	global queue, discarded, k
	while len(queue) != 0:
		element = heapq.heappop(queue)
		if len(element[1].Children) == 0:
			return element
		else:
			if pfirst * element[1].prob < pm:
				discarded.append(element)
			else:
				for child in element[1].Children:
					heapq.heappush(queue, (MINDISTNN(point,child.Region),child))


if __name__ == "__main__":
	# Start_Time = 0
	# End_Time = 0
	# NumofComp = 0

	# Start_Time = time.time()
	QueryLat = 0
	QueryLong = 0
	QueryDict = {}
	DiskPageSize = 120
	KeySize = 8
	PointerSize = 4
	Dimension = [14,15]
	NumDimension = 2
	NumMaxKey = 10
	NumMinKey = 5
	DefaultDict = {}
	DefaultKeys = []
	for i in range(NumDimension):
		DefaultKeys.append(str(i) + 'min')
		DefaultKeys.append(str(i) + 'max')
	DefaultDict = dict.fromkeys(DefaultKeys, None)
	Heap = []
	BloodGroup = ''
	BloodGroupList = ['A+','AB+','B+','O+']
	returnList = []
	# SkylinePoints = []
	Root = None
	NN = []
	queue = []
	discarded = []
	k = 0
	# with open('query_real.txt','r') as f:
	# 	# Dimension = [i- 1 for i in map(int, f.readline().strip().split())]
	# 	Dimension = map(int, f.readline().strip().split())
	# 	NumDimension = len(Dimension)
	# 	DiskPageSize = int(f.readline().strip())
	# 	string = f.readline().strip().split()
	# 	# k = int(f.readline().strip())
	# 	PointerSize = int(string[0])
	# 	KeySize = int(string[1])
	# 	NumMaxKey = divmod(DiskPageSize, PointerSize + KeySize)[0]
	# 	NumMinKey = NumMaxKey/2
	# 	DefaultKeys = []
	# 	for i in range(NumDimension):
	# 		DefaultKeys.append(str(i) + 'min')
	# 		DefaultKeys.append(str(i) + 'max')
	# 	DefaultDict = dict.fromkeys(DefaultKeys, None)

	Root = node()
	arglist = sys.argv
	if arglist[1] not in BloodGroupList:
		print "Wrong BloodGroup"
	else:
		BloodGroup = arglist[1]
	try:
		QueryLat = float(arglist[2])
		QueryLong = float(arglist[3])
		QueryDict = dict.fromkeys(DefaultKeys, None)
		QueryDict['0min'] = QueryLat
		QueryDict['0max'] = QueryLat
		QueryDict['1min'] = QueryLong
		QueryDict['1max'] = QueryLong
	except:
		print 'wrong lat long args'
	if arglist[4] == 'threshold':
		try:
			k = float(arglist[5])
		except:
			print 'wrong threshold argument'
	elif arglist[4] == 'kbest':
		try:
			if arglist[5].isdigit() == True:
				k = int(arglist[5])
			else:
				raise ValueError
		except:
			print "wrong kbest argument"
	else:
		print "wrong output type argument"

	database = 'skyline/'
	if BloodGroup == 'A+':
		database += 'newdonordb_a.csv' 
		# makeRtree('newdonordb_a.csv')
	elif BloodGroup == 'AB+':
		database += 'newdonordb_ab.csv' 
		# makeRtree('newdonordb_ab.csv')
	elif BloodGroup == 'B+':
		database += 'newdonordb_b.csv' 
		# makeRtree('newdonordb_b.csv')
	else:
		database += 'newdonordb_o.csv' 
		# makeRtree('newdonordb_o.csv')
	makeRtree(database)
	# print '-------------------'
	if arglist[4] == 'threshold' and arglist[6] == '0':
		PNNIncThres(Root, QueryDict)
	elif arglist[4] == 'kbest' and arglist[6] == '0':
		PNNIncRank(Root, QueryDict)
	elif arglist[4] == 'kbest' and arglist[6] == '1':
		PNNIncAugRank(Root, QueryDict)
	elif arglist[4] == 'threshold' and arglist[6] == '1':
		PNNIncAugThres(Root, QueryDict)
	else:
		print 'problem'
	temp = []
	# with open('newdonordb_old.csv','r') as f:
	# 	for Object in f:
	# 		Object = Object.strip().split(",")
	# 		if int(Object[0]) in returnList:
	# 			# print [Object[1].strip(),Object[4].strip(),Object[6].strip(),Object[11].strip(),Object[13].strip()]
	# 			temp.append([int(Object[0]),Object[1].strip(),Object[4].strip(),Object[6].strip(),Object[11].strip(),Object[13].strip()])
	# for index in returnList:
	# 	for item in temp:
	# 		if item[0] == index:
	# 			print item
	# 			break

	# if BloodGroup == 'A+':
	temp = []
	with open(database,'r') as f:
		for Object in f:
			Object = Object.strip().split(",")
			if int(Object[0]) in returnList:
				# print [Object[1].strip(),Object[4].strip(),Object[6].strip(),Object[11].strip(),Object[13].strip()]
				temp.append([int(Object[0]),Object[1].strip(),Object[4].strip(),Object[6].strip(),Object[11].strip(),Object[13].strip()])
	for index in returnList:
		for item in temp:
			if item[0] == index:
				print item[1:]
				break
	# elif BloodGroup == 'AB+':
	# 	temp = []
	# 	with open('newdonordb_ab.csv','r') as f:
	# 		for Object in f:
	# 			Object = Object.strip().split(",")
	# 			if int(Object[0]) in returnList:
	# 				# print [Object[1].strip(),Object[4].strip(),Object[6].strip(),Object[11].strip(),Object[13].strip()]
	# 				temp.append([int(Object[0]),Object[1].strip(),Object[4].strip(),Object[6].strip(),Object[11].strip(),Object[13].strip()])
	# 	for index in returnList:
	# 		for item in temp:
	# 			if item[0] == index:
	# 				print item
	# 				break
	# elif BloodGroup == 'B+':
	# 	temp = []
	# 	with open('newdonordb_b.csv','r') as f:
	# 		for Object in f:
	# 			Object = Object.strip().split(",")
	# 			if int(Object[0]) in returnList:
	# 				# print [Object[1].strip(),Object[4].strip(),Object[6].strip(),Object[11].strip(),Object[13].strip()]
	# 				temp.append([int(Object[0]),Object[1].strip(),Object[4].strip(),Object[6].strip(),Object[11].strip(),Object[13].strip()])
	# 	for index in returnList:
	# 		for item in temp:
	# 			if item[0] == index:
	# 				print item
	# 				break
	# else:
	# 	temp = []
	# 	with open('newdonordb_o.csv','r') as f:
	# 		for Object in f:
	# 			Object = Object.strip().split(",")
	# 			if int(Object[0]) in returnList:
	# 				# print [Object[1].strip(),Object[4].strip(),Object[6].strip(),Object[11].strip(),Object[13].strip()]
	# 				temp.append([int(Object[0]),Object[1].strip(),Object[4].strip(),Object[6].strip(),Object[11].strip(),Object[13].strip()])
	# 	for index in returnList:
	# 		for item in temp:
	# 			if item[0] == index:
	# 				print item
	# 				break

	# heapq.heappush(queue, (0,Root))
	# IncNN(Root, {"0min":0, "0max":0, "1min":0, "1max":0})
	# temp(Root, {"0min":0, "0max":0, "1min":0, "1max":0})
	# temp(Root, {"0min":28.65, "0max":28.65, "1min":77.777, "1max":77.777, "2min":0, "2max":0})
	# PNNIncRank(Root, {"0min":0, "0max":0, "1min":0, "1max":0, "2min":0, "2max":0})
	# PNNIncRank(Root, {"0min":28.6139422, "0max":28.6139422, "1min":77.274811, "1max":77.274811})
	# BBS(Root)
	# NNall(Root, {"0min":0, "0max":0, "1min":0, "1max":0})
	# NNall(Root, {"0min":0, "0max":0, "1min":0, "1max":0})
	# NN.sort(key= lambda x: x[1])
	# PNN(1)
	# print '--------'
	# # PNNThres(1)
	# print '--------'
	# PNNRank(1)