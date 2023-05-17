<h1>With XmlHttpRequest/HTTP</h1>

<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    echo "<div> Hi,".$name."</div>";
    echo "<div>Your Email is: ".$email."</div>";
    echo "<div>Your Password is: ".$password."</div>";
?>