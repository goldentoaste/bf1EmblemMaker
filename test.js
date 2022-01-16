var request = new XMLHttpRequest();
request.open(
    "POST",
    "https://companion-api.battlefield.com/jsonrpc/web/api?Emblems.newPrivateEmblem",
    !0
),
    (request.onreadystatechange = function () {
        if (request.readyState == XMLHttpRequest.DONE) {
            var e = JSON.parse(request.responseText);
            e.result
                ? (window.location.href =
                    window.location.href.replace("/new", "/edit/") + e.result.slot)
                : alert("Error");
        }
    }),
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
    request.setRequestHeader("X-GatewaySession", localStorage.gatewaySessionId),
    (data = {
        jsonrpc: "2.0",
        method: "Emblems.newPrivateEmblem",
        params: {
            data: `[ {
            "opacity": 1,
            "angle": 0,
            "flipX": false,
            "flipY": false,
            "top": 10,
            "height": 10,
            "width": 20,
            "asset": "Square",
            "selectable": false,
            "left": 10,
            "fill": "#5CA3FF"
        }]`
        },
        id: "00000000-0000-0000-0000-000000000000",
    }),
    request.send(JSON.stringify(data));


var request = new XMLHttpRequest();
request.open(
    "POST",
    "https://companion-api.battlefield.com/jsonrpc/web/api?Emblems.newPrivateEmblem",
    !0
),
    (request.onreadystatechange = function () {
        if (request.readyState == XMLHttpRequest.DONE) {
            var e = JSON.parse(request.responseText);
            e.result
                ? (window.location.href =
                    window.location.href.replace("/new", "/edit/") + e.result.slot)
                : alert("Error");
        }
    }),
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
    request.setRequestHeader("X-GatewaySession", localStorage.gatewaySessionId),
    (data = {
        jsonrpc: "2.0",
        method: "Emblems.newPrivateEmblem",
        params: {
            data: [{ "opacity": 1, "angle": 0, "flipX": false, "flipY": false, "top": 40.625, "height": 130, "width": 130, "asset": "Circle", "selectable": false, "left": 40.625, "fill": "#abcdef" }]
        },
        id: "00000000-0000-0000-0000-000000000000",
    }),
    request.send(JSON.stringify(data));
