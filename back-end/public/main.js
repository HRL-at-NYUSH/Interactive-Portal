/*
function download(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

*/
var checked_in, checked_out
var submit_in = document.getElementById('btn_ch')
if (submit_in) {
  submit_in.addEventListener('click', function () {
    checked_in = getCheckBoxValues('.in')
    localStorage.setItem('checked_in', checked_in)
    console.log(checked_in)
  })
}

var submit_out = document.getElementById('btn_out')
if (submit_in) {
  submit_out.addEventListener('click', function () {
    checked_out = getCheckBoxValues('.out')
    console.log(checked_out)
  })
}

function export2txt(originalData) {
  const a = document.createElement('a')
  a.href = URL.createObjectURL(
    new Blob([JSON.stringify(originalData, null, 2)], {
      type: 'text/plain',
    }),
  )
  a.setAttribute('download', 'data.json')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
function makeVisible() {
  checker('year_ch', 'label-startyear')
  checker('year_ch', 'label-endyear')
  checker('year_ch', 'startyear')
  checker('year_ch', 'endyear')
  checker('dir_ch', 'dir')
  checker('nation_ch', 'nation')
  checker('address_ch', 'address')
}
function checker(check, input) {
  if (document.getElementById(check).checked) {
    document.getElementById(input).style.visibility = 'visible'
  } else {
    document.getElementById(input).style.visibility = 'hidden'
  }
}
function getCheckBoxValues(target) {
  console.log('inside getCheckBoxValues')
  var checkboxes = document.querySelectorAll(target)
  var checked = []
  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i]
    if (checkbox.checked) checked.push(checkbox.value)
  }
  return checked
}

function waitForCondition() {
  return new Promise((resolve) => {
    function checkFlag() {
      if (appD != null) {
        console.log('met')
        resolve()
      } else {
        window.setTimeout(checkFlag, 30000)
      }
    }
    checkFlag()
  })
}

async function run() {
  console.log('before')
  await waitForCondition()
  console.log('after')
}

function testGS() {
  document.getElementById('announce').textContent = 'Data is loading ^_^'

  const url =
    'https://script.google.com/macros/s/AKfycbyVJ1atQPDr7J_SmlrveoZsI0nqXtxVnThOjrx165pUh-rnif9BablI/exec'
  fetch(url)
    .then((d) => d.json())
    .then((d) => {
      var allData = d[0].data
      console.log(checked_in)
      //var year=(document.getElementById("year")).value;
      var startyear = parseInt(document.getElementById('startyear').value)
      var endyear = parseInt(document.getElementById('endyear').value)
      var years = []
      if (startyear === endyear) {
        years.push(startyear)
      } else {
        for (var i = startyear; i <= endyear; i++) years.push(i)
      }
      console.log(years)

      nations = []
      for (var option of document.getElementById('nation').options) {
        if (option.selected) {
          nations.push(option.value)
          console.log(option.value)
        }
      }

      var address = document.getElementById('address').value

      var result_obj = {}
      var count = 0
      var correctSets = []
      if (checked_in.includes('ADDRESS')) {
        var addressData = allData.filter(function (person) {
          return person.street_clean == address
        })
        result_obj[count] = addressData
        count += 1
      }
      if (checked_in.includes('YR')) {
        var k
        for (k = 0; k < endyear - startyear + 1; k++) {
          var yearData = allData.filter(function (person) {
            return person.YR === years[0]
          })
          result_obj[count] = yearData
          count += 1
          if (checked_in.includes('NATION')) {
            var nationSets = []

            for (let i = 0; i < nations.length; i++) {
              nationData = allData.filter(function (person) {
                return person.NATIONALITY === nations[i]
              })
              nationSets.push(nationData)
              result_obj[count] = nationData
              result_obj,
                (correctData = Object.values(result_obj).reduce((a, b) =>
                  b.filter(Set.prototype.has, new Set(a)),
                ))
              if (
                correctData.length != 0 &&
                !correctSets.includes(correctData)
              ) {
                correctSets.push(correctData)
              }
            }
            console.log('nation')
          } else {
            result_obj,
              (correctData = Object.values(result_obj).reduce((a, b) =>
                b.filter(Set.prototype.has, new Set(a)),
              ))
            if (correctData.length != 0 && !correctSets.includes(correctData)) {
              correctSets.push(correctData)
            }
            console.log('no nation')
          }
        }
      }

      console.log(correctSets)

      var jsonOut = JSON.stringify(correctSets)
      //export2txt(correctData);
      var dataStr =
        'data:text/json;charset=utf-8,' + encodeURIComponent(jsonOut)
      var dlAnchorElem = document.getElementById('downloadAnchorElem')
      dlAnchorElem.setAttribute('href', dataStr)
      dlAnchorElem.setAttribute('download', 'out.json')
      dlAnchorElem.click()
      document.getElementById('app').textContent = jsonOut
      document.getElementById('announce').textContent = 'Data is ready ^_^'
      document.getElementById('results_btn').style.visibility = 'visible'

      //send elements to the results.js page

      localStorage.setItem('output', jsonOut)
      var jsonCheckedin = JSON.stringify(checked_in)
      var jsonCheckedout = JSON.stringify(checked_out)

      localStorage.setItem('check-in', jsonCheckedin)
      localStorage.setItem('check-out', jsonCheckedout)
    })
}

function addGS() {
  const url =
    'https://script.google.com/macros/s/AKfycbyVJ1atQPDr7J_SmlrveoZsI0nqXtxVnThOjrx165pUh-rnif9BablI/exec'
  fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow', // manual, *follow, error

    body: JSON.stringify({ name: 'Olivia' }), // body data type must match "Content-Type" header
  })
}
function clear() {
  document.getElementById('app').textContent = ''
}

document.getElementById('btn2').addEventListener('click', addGS)
document.getElementById('btn').addEventListener('click', testGS)
document.getElementById('btn3').addEventListener('click', clear)
