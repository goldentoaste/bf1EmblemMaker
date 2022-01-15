var request = new XMLHttpRequest;
request.open("POST", "https://companion-api.battlefield.com/jsonrpc/web/api?Emblems.newPrivateEmblem", !0), request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE) {
            var e = JSON.parse(request.responseText);
            e.result ? window.location.href = window.location.href.replace("/new", "/edit/") + e.result.slot : alert("Error")
        }
    },
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
    request.setRequestHeader("X-GatewaySession", localStorage.gatewaySessionId),
    data = {
        jsonrpc: "2.0",
        method: "Emblems.newPrivateEmblem",
        params: {
            data: '[{"opacity":1,"angle":0,"flipX":false,"flipY":false,"top":234.375,"height":159.67621364233347,"width":126.65907117835974,"asset":"holiday_gingerbread_man","selectable":true,"left":205.625,"fill":"#000000"},{"opacity":1,"angle":314.72462761044414,"flipX":false,"flipY":false,"top":180.625,"height":75.22990654205607,"width":159.50155763239874,"asset":"Hammer","selectable":true,"left":100.625,"fill":"#000000"},{"opacity":1,"angle":0,"flipX":false,"flipY":false,"top":59.801089921956745,"height":91.60373747631219,"width":67.79334975110213,"asset":"Number8","selectable":true,"left":47.375366464336096,"fill":"#000000"},{"opacity":1,"angle":0,"flipX":false,"flipY":false,"top":59.239193925233636,"height":91.72994548286604,"width":18.34598909657321,"asset":"Stroke","selectable":true,"left":20.722838785046747,"fill":"#000000"},{"opacity":1,"angle":0,"flipX":false,"flipY":false,"top":58.46515105720371,"height":92.68185974680615,"width":68.58399695101315,"asset":"Number0","selectable":true,"left":124.02692059388664,"fill":"#000000"},{"opacity":1,"angle":0,"flipX":false,"flipY":false,"top":56.791277258566986,"height":88.0841121495327,"width":17.616822429906545,"asset":"Stroke","selectable":true,"left":187.23325545171338,"fill":"#000000"},{"opacity":1,"angle":335.0220832366448,"flipX":false,"flipY":false,"top":57.20907916991122,"height":88.8438290376704,"width":17.768765807534077,"asset":"Stroke","selectable":true,"left":205.55180333571548,"fill":"#000000"},{"opacity":1,"angle":0,"flipX":false,"flipY":false,"top":57.468360591900314,"height":90.6882788161994,"width":18.137655763239877,"asset":"Stroke","selectable":true,"left":226.24367211838006,"fill":"#000000"},{"opacity":1,"angle":0,"flipX":false,"flipY":false,"top":56.99961059190032,"height":92.25077881619939,"width":18.450155763239877,"asset":"Stroke","selectable":true,"left":265.14992211838006,"fill":"#000000"},{"opacity":1,"angle":31.728582379289303,"flipX":false,"flipY":false,"top":35.0982142720639,"height":47.280732352898276,"width":17.59624972211654,"asset":"Stroke","selectable":true,"left":282.1263462022993,"fill":"#000000"},{"opacity":1,"angle":335.45469235942744,"flipX":false,"flipY":false,"top":74.980895095126,"height":59.6752263561889,"width":17.017207903523435,"asset":"Stroke","selectable":true,"left":289.26610774191454,"fill":"#000000"}]'
        },
        id: "00000000-0000-0000-0000-000000000000"
    }, request.send(JSON.stringify(data));

    