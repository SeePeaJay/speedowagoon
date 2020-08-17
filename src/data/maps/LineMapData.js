import db from './../../firestore/firebaseInit'

let dallasBranchCoordinates = ''
// let washingtonBranchCoordinates
// let tokyoBranchCoordinates
// let cairoBranchCoordinates

function populateCoordinates () {
  return db.collection('branches').get().then(
    querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(typeof doc.data().branch_id)
        switch (doc.data().branch_id) {
          case '1':
            // console.log('Have I been here yet?')
            dallasBranchCoordinates = doc.data().branch_coordinates
            // console.log(dallasBranchCoordinates.split(', ')[0])
            break
          case '2':
            // washingtonBranchCoordinates = doc.data().branch_coordinates
            break
          case '3':
            // tokyoBranchCoordinates = doc.data().branch_coordinates
            break
          case '4':
            // cairoBranchCoordinates = doc.data().branch_coordinates
            break
        }
      })
    },
  )
}

export const getLineMapData = (themes) => {
  return populateCoordinates().then(() => {
    const targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z'
    const london = {
      id: 'london',
      color: themes.primary,
      svgPath: targetSVG,
      title: 'London',
      country: 'United Kingdom',
      latitude: 51.5002,
      longitude: -0.1262,
      scale: 1.5,
      zoomLevel: 8.74,
      zoomLongitude: -20.1341,
      zoomLatitude: 49.1712,
      lines: [
        {
          latitudes: [51.5002, 50.4422],
          longitudes: [-0.1262, 30.5367],
        },
        {
          latitudes: [51.5002, 46.9480],
          longitudes: [-0.1262, 7.4481],
        },
      ],
      images: [
        {
          label: 'London',
          svgPath: targetSVG,
          left: 100,
          top: 45,
          color: themes.info,
          labelColor: themes.info,
          labelRollOverColor: themes.info,
          labelFontSize: 20,
        },
      ],
    }
    const dallas = {
      id: 'dallas',
      color: themes.primary,
      svgPath: targetSVG,
      title: 'Dallas',
      country: 'United States',
      latitude: dallasBranchCoordinates.split(', ')[0],
      longitude: dallasBranchCoordinates.split(', ')[1],
      scale: 1.5,
      zoomLevel: 2,
      zoomLongitude: dallasBranchCoordinates.split(', ')[0],
      zoomLatitude: dallasBranchCoordinates.split(', ')[1],
      lines: [
        {
          latitudes: [51.5002, 50.4422],
          longitudes: [-0.1262, 30.5367],
        },
        {
          latitudes: [51.5002, 46.9480],
          longitudes: [-0.1262, 7.4481],
        },
      ],
      images: [
        {
          label: 'Dallas branch',
          svgPath: targetSVG,
          left: 100,
          top: 45,
          color: themes.info,
          labelColor: themes.info,
          labelRollOverColor: themes.info,
          labelFontSize: 20,
        },
      ],
    }
    const cities = [
      london,
      dallas,
    ]

    return {
      cities,
      mainCity: london,
    }
  })
}
