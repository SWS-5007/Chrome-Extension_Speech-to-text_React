const objectEmpty = function (obj) {
  const isEmpty = Object.keys(obj).length === 0 && obj.constructor === Object
  return isEmpty
}

const mkiconfTimer = setInterval(function checkMkiconf() {
  const Mkiconf = window.Mkiconf

  if (
    Mkiconf &&
    Mkiconf.org_id &&
    !objectEmpty(Mkiconf.administered_networks)
  ) {
    let menu = ""
    let submenu = ""
    for (const el of window.dataLayer) { 
      if (typeof el === "object") { 
        if (el.event === 'page_view') {
          [menu, submenu] = el.location.slice(1).split('/')
        }
      } 
    }     
    window.postMessage(
      {
        source: 'boundlessdigital_com',
        payload: JSON.stringify({
          "Mkiconf": Mkiconf,
          "menu": menu,
          "submenu": submenu
        }),
      },
      window.location.origin
    )
    clearInterval(mkiconfTimer)
  }
}, 20)

setTimeout(function killSampler() {
  clearInterval(mkiconfTimer)
}, 20 * 1000)
