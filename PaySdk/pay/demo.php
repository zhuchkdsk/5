<?php
/*
 * @Author: will
 * @LastEditors: will
 * @Description: 
 */

error_reporting(0);
header("Content-type: text/html; charset=utf-8");

/*开启后直接从数据调用id跟秘钥,否则从/PaySdk/Config.php文件调用*/
//define("PAY_APPID", "138"); //你的appid
//define("PAY_KEY", "22"); //你的秘钥

if (!function_exists('PayCreateSdk')) {
  require $_SERVER['DOCUMENT_ROOT'] . '/PaySdk/Config.php';
}

$payData = array(
  'uid' => "2222", //你的网站用户id
  'out_trade_no' => time(), //订单号
  'total_fee' => 2, //金额
  'return_url' => 'http://' . $_SERVER['HTTP_HOST'] . "/aaa?aaa=3&b=4", //异步回调地址
  'notify_url' => "http://www.baidu.com", //支付成功后返回
);
$getUrl = PayCreateSdk($payData);
exit("<meta http-equiv='Refresh' content='0;URL={$getUrl}'>");
