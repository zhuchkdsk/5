<!--
 * @Author: will
 * @LastEditors: will
 * @Description:双仓库
-->

> USDT_TRC20 充值 API.USDT TRC20 TRON 微信，支付宝,云闪付,alipay,wechat 免签支付

**中文** | [English](https://github.com/amu1433/sopay/blob/main/README.zh.md)

## 项目地址

<a href="https://home.sopay8.com/">https://home.sopay8.com/</a>

## telegarm 群

https://t.me/+X3JxsPNvHt41Zjdl

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220905/57bdc18c6e9045a72cfea9143751bbac.png 'api.png')

## 主要功能

- usdt php 充值提现功能
- USDT.trc20 支付接口
- 微信免签支付
- 支付宝免签支付
- 云闪付免签支付

## USDT，TRC20 支付介绍

### API 下单,,回调推送,（币直接到达你的账户,我们不参与资金）

> 钱直接到达你的钱包,快速回调, 查询方便

### 通过支付数量回调,支持高并发

> 通过支付数量发起回调, 数量不对会导致掉单, 补单后请自行保存交易 Id

### 离线地址,匿名交易

> 匿名收款,定时更换离线收款地址,不影响提币归集

## 微信个码支付介绍

- 无需挂机
- 采用 websock 接口,无需轮训查询是否支付
- 支持固码
- 异常提醒
- 自动开启
-

## 支付宝/银行卡

- 采用手机端监控

## 对接方式

```javascript
<div id="sopay">loading...</div>
<script>
document.write('<script type="text/javascript" src="https://api.sopay8.com/assets/sopay.js?v=' + Math.random() + '"><\/script>')
</script>

<script>
    $(document).ready(function () {
        SoPay.post({
          app_id: '11323', //你的appid
          uid: '23', //你网站用户id
          total_fee: 2.00, //支付金额
          out_trade_no: '202010092206552336', //订单号
          return_url: 'http://www.baidu.com', //支付完跳转
          notify_url: 'http://www.baidu.com', //回调地址
          param: "", //其他参数
          sign: '2020091051481001', //签名
          callback: function (res) {
            //获取二维码后显示的函数
            console.log(res);
          },
          success: function (data) {
            //支付成功后的函数
             console.log(data)
            alert('支付成功')
            //跳转
            //跳转
            window.location.href = "http://www.baidu.com"
          },
        })
      })
</script>


```

## 前端 JavaScript 对接 demo

https://github.com/amu1433/sopay/blob/main/demo.html

## php 的 demo（请先下载 PaySdk 文件到你网站的根目录）

https://github.com/amu1433/sopay/blob/main/demo.php

## dist(文件夹为平台的前端文件)

- 参数详解

  **SoPay.post 请求支付接口 说明**

| 参数名          | 必选 | 类型    | 说明                         | 举例                                                  |
| :-------------- | :--- | :------ | :--------------------------- | :---------------------------------------------------- |
| app_id          | 是   | string  | 我们平台的 appid             | xxx                                                   |
| uid             | 是   | string  | 你平台用户 id                | 回调发送参数用于区分用户                              |
| out_trade_no    | 是   | string  | 订单号                       |
| total_fee       | 是   | string  | 金额                         | 2.00 保留 2 位小数                                    |
| sign            | 是   | string  | 签名                         | 参考签名算法                                          |
| notify_url      | 是   | string  | 回调地址                     | http://www.baidu.com                                  |
| return_url      | 是   | string  | 支付成功后返回地址           | http://www.baidu.com                                  |
| callback        | 是   | funtion | 请求成功后的函数             |                                                       |
| success         | 是   | funtion | 支付成功后的函数             | 无需轮训查询结果,我们会给 notify_url 后端发送支付结果 |
| param           | 否   | string  | 其他参数,回调原路返回        |                                                       |
| type            | 否   | string  | 支付方式,默认后台选择,可不传 | usdt/trx/wechat                                       |
| currency        | 否   | string  | 支付币种,可不传              | CNY、USD                                              |
| language        | 否   | string  | 语言,可不传                  | zh/en                                                 |
| specify_address | 否   | string  | 指定账户内的address          | usdt的指定收款地址（必须先添加到我们平台）            |



**callback 函数用于自定义页面，返回如下参数,根据参数设置页面即可**
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


**success 支付成功后的函数返回(<font color=Crimson> 同时我们也会给你的回调 url,notify_url 发送同样数据,请使用 POST 请求接收</font>)**


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


- MD5 签名的字符串为

```
app_id=xxxxx&out_trade_no=xxxxx&param=&total_fee=xxxxx&uid=xxxxx&key=xxxxx
```

# 项目图片

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/b4f1b47f5dc8a939c186f74690539e83.png 'api.png')

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/12b3110af50953cb184a7901c50fa73a.png 'api.png')

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/6032d99b0d96bc0493a0ca2aa83dbe6d.png 'api.png')

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/cd21ad18daf55fa92d81678164204f02.png 'api.png')

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/0384e9a94182b32a99148969c359d92f.png 'api.png')
![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/444c48b6aa8b07211bb11327ab182e02.png 'api.png')
![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/5ede6de3de421f094f791a942c1479b3.png 'api.png')
![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/e57d6214c0a4a881e643a3c67f387166.png 'api.png')
![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220419/eb902bfbe4ef3b36b0881ba82331c268.png 'api.png')

## telegarm 群

https://t.me/+X3JxsPNvHt41Zjdl

![输入图片说明](https://apiupload.oss-cn-beijing.aliyuncs.com/tinymce/20220905/57bdc18c6e9045a72cfea9143751bbac.png 'api.png')
