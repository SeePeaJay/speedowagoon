// import db from './../../firestore/firebaseInit'

let generatedData

export const getDonutChartData = (themes) => {
  if (generatedData) {
    generatedData.datasets[0].backgroundColor = [themes.danger, themes.info, themes.primary]
  } else {
    // let totalVehiclesInDallasBranch = 0
    // let totalVehiclesInWashingtonBranch = 0
    // let totalVehiclesInTokyoBranch = 0
    // let totalVehiclesInCairoBranch = 0
    generatedData = {
      labels: ['Dallas', 'Washington', 'Tokyo', 'Cairo'],
      datasets: [{
        // label: 'Population (millions)',
        backgroundColor: [themes.danger, themes.warning, themes.primary, themes.info],
        data: [2478, 5267, 3373, 345],
      }],
    }
  }

  return generatedData
}
