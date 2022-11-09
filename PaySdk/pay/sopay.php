<?php
/*
 * @Author: will
 * @LastEditors: will
 * @Description: 
 */
@error_reporting(E_ALL ^ E_NOTICE);
header('Content-Type: text/html; charset=utf-8');
extract($_GET);
extract($_POST);
//获取来路
$notify_url = urldecode($notify_url); //来路
$return_url = urldecode($return_url); //解码支付成功后的页面

?>
<!DOCTYPE html>
<html>

<head>
  <title>paying</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0" />
  <meta name="format-detection" content="telephone=no,email=no,date=no,address=no">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
</head>

<body>
  <div id="sopay">loading...</div>
  <script>
    document.write('<script type="text/javascript" src="https://api.sopay8.com/assets/sopay.js?v=' + Math.random() + '"><\/script>')
    $(document).ready(function() {
      SoPay.post({
        app_id: "<?php echo $app_id ?>",
        type: "<?php echo $type ?>",
        uid: "<?php echo $uid ?>",
        total_fee: "<?php echo $total_fee ?>",
        out_trade_no: "<?php echo $out_trade_no ?>",
        return_url: "<?php echo $return_url ?>",
        notify_url: "<?php echo $notify_url ?>",
        sign: "<?php echo $sign ?>",
        param: "<?php echo $param ?>",
        currency: "<?php echo $currency ?>",
        language: "<?php echo $language ?>",
        specify_address: "<?php echo $specify_address ?>",
        callback: function(res) {
          //获取二维码后显示的函数
          console.table(res);
        },
        success: function(data) {
          //支付成功后的函数
          console.table(data);
          alert("支付成功");
          window.location.href = "<?php echo $return_url ?>"
        }
      });
    });
  </script>
</body>