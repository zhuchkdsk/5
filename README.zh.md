> USDT_TRC20 recharge API.USDT TRC20 TRON alipay,wechat payment

**English** | [中文](https://github.com/amu1433/sopay/)

## Projects

<a href="https://home.sopay8.com/">https://home.sopay8.com/</a>

## telegarm

https://t.me/+X3JxsPNvHt41Zjdl

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220905/57bdc18c6e9045a72cfea9143751bbac.png 'api.png')

## What can we do?

- usdt php recharge and withdraw
- USDT.trc20 payment
- USDT.trc20 api

## JavaScript Calling interface

- 1.<a href="https://github.com/amu1433/sopay/blob/main/demo.html" target="_blank">demo code for JavaScript </a>

## Invoke

```JavaScript
<div id="sopay">loading...</div>
<script>
  document.write('<script type="text/javascript" src="https://api.sopay8.com/assets/sopay.js?v=' + Math.random() + '"><\/script>')
    $(document).ready(function () {
        SoPay.post({
          app_id: '11323', //your appid
          uid: '23', //your Websites  userID
          total_fee: 2.00, //Amount
          out_trade_no: '202010092206552336', //order
          return_url: 'http://www.baidu.com', //return_url
          notify_url: 'http://www.baidu.com', //notify_url
          param: "", //其他参数
          sign: '2020091051481001', //签名
          callback: function (res) {
            //获取二维码后显示的函数
            console.table(res);
 
          },
          success: function (data) {
            //支付成功后的函数
             console.table(data)
            alert('Pay success')
            //跳转
            window.location.href = "http://www.baidu.com"
          },
        })
      })
</script>
```


- Parameters  info

  **SoPay.post **

| Parameters      | Must | Types   | Notes                          | For example                                           |
| :-------------- | :--- | :------ | :----------------------------- | :---------------------------------------------------- |
| app_id          | yes  | string  | Our Platform appid             | xxx                                                   |
| uid             | yes  | string  | your Websites  userID          | 回调发送参数用于区分用户                              |
| out_trade_no    | yes  | string  | order                          |
| total_fee       | yes  | string  | Amount                         | 2.00 保留 2 位小数                                    |
| sign            | yes  | string  | sign                           | sign                                                  |
| notify_url      | yes  | string  | notify_url                     | http://www.baidu.com                                  |
| return_url      | yes  | string  | return_url                     | http://www.baidu.com                                  |
| callback        | yes  | funtion | callback                       | Show up QR code function                              |
| success         | yes  | funtion | Pay The function after success | We will send the payment result to the notify backend |
| param           | no   | string  | 其他参数,回调原路返回          | {"a":1,"b":2}                                         |
| type            | no   | string  | Mode of payment                | usdt/trx/wechat                                       |
| currency        | no   | string  | he amount entered is           | CNY、USD                                              |
| language        | no   | string  | language                       | zh/en                                                 |
| specify_address | 否   | string  | specify address                | Must be added to our platform first.                  |


**callback  Parameters  info**

```json
{
    "id": 56899, //订单id
    "out_trade_no": "1667808605",//你平台的id
    "transaction_id": "6368bd5f18883636",//我们平台id
    "pay_type": "usdt",//下单方式
    "total_fee": "2.00",//下单金额
    "really_total_fee": "2.00",//实际支付金额
    "pay_url": "data:image/png;base64",//二维码图片地址base64编码
    "pay_text": "TTFCHruwzsPaPPDr7dEVkTYNU3RDH8Pdc9",//二维码地址,未编码
    "param": "",//其他参数
    "address": "TTFCHruwzsPaPPDr7dEVkTYNU3RDH8Pdc9",//usdt下单地址
    "style": {},//样式文件
    "usdt_type": "trx",//支付方式
    "language": {}//语言文件
}

```
**success function  Pay success(<font color=Crimson> post  your notify_url ,Please use the POST request to receive</font>)**


```json
{
    "pay_type": "trx",//支付方式
    "uid": "",//你网站用户id
    "out_trade_no": "1667808605",//你平台的id
    "transaction_id": "6368bd5f18883636",//我们平台id
    "total_fee": "2.00",//下单金额
    "really_total_fee": "2.00",//实际支付金额
    "param": "",//其他参数
    "usdt_transaction_id": "TTFCHruwzsPaPPDr7dEVkTYNU3RDH8Pdc9",//usdt的txId 的地址
    "sign": "",//签名验证
}

```
**description**

- This plug-in uses the prompt message reminder, does not need the rotation training inquiry result, pays after the success function, automatically invokes the logic to jump the business

**demo Picture**

![image size](https://apiupload.oss-cn-beijing.aliyuncs.com/assets/WechatIMG136.jpeg =300x)

- MD5 签名的字符串为

```
app_id=xxxxx&out_trade_no=xxxxx&param=&total_fee=xxxxx&uid=xxxxx&key=xxxxx
```

# Projects Picture

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/b4f1b47f5dc8a939c186f74690539e83.png 'api.png')

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/12b3110af50953cb184a7901c50fa73a.png 'api.png')

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/6032d99b0d96bc0493a0ca2aa83dbe6d.png 'api.png')

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/cd21ad18daf55fa92d81678164204f02.png 'api.png')

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/0384e9a94182b32a99148969c359d92f.png 'api.png')
![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/444c48b6aa8b07211bb11327ab182e02.png 'api.png')
![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/5ede6de3de421f094f791a942c1479b3.png 'api.png')
![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/e57d6214c0a4a881e643a3c67f387166.png 'api.png')
![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/eb902bfbe4ef3b36b0881ba82331c268.png 'api.png')

## telegarm

https://t.me/+X3JxsPNvHt41Zjdl

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220905/57bdc18c6e9045a72cfea9143751bbac.png 'api.png')
