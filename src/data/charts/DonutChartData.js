import db from './../../firestore/firebaseInit'

let generatedData
let totalVehiclesInDallasBranch = 0
let totalVehiclesInWashingtonBranch = 0
let totalVehiclesInTokyoBranch = 0
let totalVehiclesInCairoBranch = 0

function populateData () {
  return db.collection('vehicles').get().then(
    querySnapshot => {
      querySnapshot.forEach(doc => {
        // console.log(typeof doc.data().branch_id)
        switch (doc.data().branch_id) {
          case '1':
            // console.log('Have I been here yet?')
            totalVehiclesInDallasBranch += 1
            break
          case '2':
            totalVehiclesInWashingtonBranch += 1
            break
          case '3':
            totalVehiclesInTokyoBranch += 1
            break
          case '4':
            totalVehiclesInCairoBranch += 1
            break
        }
      })
    },
  )
}

export const getDonutChartData = (themes) => {
  return populateData().then(() => {
    if (generatedData) {
      generatedData.datasets[0].backgroundColor = [themes.danger, themes.warning, themes.primary, themes.info]
    } else {
      // console.log(totalVehiclesInDallasBranch)
      generatedData = {
        labels: ['Dallas', 'Washington', 'Tokyo', 'Cairo'],
        datasets: [{
          // label: 'Population (millions)',
          backgroundColor: [themes.danger, themes.warning, themes.primary, themes.info],
          data: [totalVehiclesInDallasBranch, totalVehiclesInWashingtonBranch, totalVehiclesInTokyoBranch,
            totalVehiclesInCairoBranch],
        }],
      }
    }
    return generatedData
  })
}
