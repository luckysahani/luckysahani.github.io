<html>
<head>
	<link rel="stylesheet" type="text/css" href="resources/main.css">
    <script type="text/javascript" src="js/jquery-2.1.4.js"></script>
	<!-- // <script type="text/javascript" src="js/search.js"></script> -->
	<title>BloodConnect</title>
</head>
<body>
<a href="index.php" class='top-right'>Home</a>
<form action="" method="post" enctype="multipart/form-data" class="basic-grey" id='postcontent'>
    <h1>
    	Helpline Manager
    	<span>Basic model of our helpline portal</span>
    </h1> 
    <!--<label for="city">
    	<span>City</span>
	    <select name="city" required>
	    	<option name='Delhi'>Delhi</option>
	    	<option name='Kanpur'>Kanpur</option>
	    	<option name='Jaipur'>Jaipur</option>
	    </select>
    </label> -->
    <label for="queryaddress">
    	<span>Blood Bank Address</span>
    	<input type="text" name="queryaddress" required=required>
    </label>
    <label for="bloodgroup">
    	<span>Blood Group</span>
	    <select name="bloodgroup" required=required>
	    	<!-- <option name='' selected="selected"></option> -->
	    	<option name='a+'>A+</option>
	    	<!-- <option name='a-'>A-</option> -->
	    	<option name='b+'>B+</option>
	    	<!-- <option name='b-'>B-</option> -->
	    	<option name='ab+'>AB+</option>
	    	<!-- <option name='ab-'>AB-</option> -->
	    	<option name='o+'>O+</option>
	    	<!-- <option name='o-'>O+</option> -->
	    </select>
    </label>
    <label for="filter_type">
        <span>Filter Type</span>
        <select name="filter_type" id="filter_type" required=required>
            <option name='kbest' onclick="$('input#queryrank').attr('step','1');$('input#queryrank').removeAttr('max');">kbest</option>
            <option name='threshold' onclick="$('input#queryrank').attr('step','any');$('input#queryrank').attr('max','1');">threshold</option>
        </select>
    </label>
    <label for="queryrank">
        <span>How many Donor Suggestions?</span>
        <input type="number" id="queryrank" name="queryrank" min="0" required=required>
    </label>
    <label for="algorithm">
        <span>Augmented Algorithm?</span>
        <select name="algorithm" id="algorithm" required=required>
            <option name='nonaugmented'>No</option>
            <option name='augmented'>Yes, please!</option>
        </select>
    </label>
    <label>
        <span>&nbsp;</span> 
    	<input type="submit" class="button" value="Get Donor List" name="submit">
    </label>
</form>

<?php
if (isset($_POST["queryaddress"])) {
    $address = trim ($_POST["queryaddress"]);
    $bloodgroup = trim ($_POST["bloodgroup"]);
    $rank = trim ($_POST["queryrank"]);
    $filter_type = trim ($_POST["filter_type"]);
    $algorithm = trim ($_POST["algorithm"]) == "No" ? 0 : 1;

    // echo $algorithm;

    if (empty($address) || empty($bloodgroup)) {
        echo "Insufficient data!!<br>";
        exit(0);
    }

    $request_url = "http://maps.googleapis.com/maps/api/geocode/xml?address=".urlencode($address)."&sensor=true";
    $xml = simplexml_load_file($request_url) or die("url not loading");
    $status = $xml->status;
    if ($status=="OK") {
        $Lat = $xml->result->geometry->location->lat;
        $Lon = $xml->result->geometry->location->lng;

        // Parameters - Blood Group, lat-lon, number of donors
        exec("python skyline/NNrefractored.py ".$bloodgroup." ".$Lat." ".$Lon." ".$filter_type." ".$rank." ".$algorithm, $output);
        // echo "python skyline/NNrefractored.py ".$bloodgroup." ".$Lat." ".$Lon." ".$filter_type." ".$rank." ".$algorithm;

        echo "<table class='bordered'>";
        echo "<thead><tr><th>Name</th><th>Contact Number</th><th>Address</th><th>Email Address</th><th>Last Donated Date</th></tr></thead>";
        foreach ($output as $result) {
            $result = split(',', substr($result, 1,-1));
            echo "<tr>";
            foreach ($result as $value) {
                echo "<td>".substr(trim($value), 1,-1)."</td>";
            }
            echo "</tr>";
            // var_dump($result);
        }
        echo "</table>";
        // var_dump($output);
    }
    else {  
        echo "Network problem. Please check your internet connection.<br>";
    }
}
?>
