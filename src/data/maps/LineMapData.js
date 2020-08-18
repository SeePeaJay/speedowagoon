import db from './../../firestore/firebaseInit'

let dallasBranchCoordinates = ''
let washingtonBranchCoordinates = ''
let tokyoBranchCoordinates = ''
let cairoBranchCoordinates = ''

function populateCoordinates () {
  return db.collection('branches').get().then(
    querySnapshot => {
      querySnapshot.forEach(doc => {
        // console.log(typeof doc.data().branch_id)
        switch (doc.data().branch_id) {
          case '1':
            dallasBranchCoordinates = doc.data().branch_coordinates
            break
          case '2':
            washingtonBranchCoordinates = doc.data().branch_coordinates
            break
          case '3':
            tokyoBranchCoordinates = doc.data().branch_coordinates
            break
          case '4':
            cairoBranchCoordinates = doc.data().branch_coordinates
            break
        }
      })
    },
  )
}

export const getLineMapData = (themes) => {
  return populateCoordinates().then(() => {
    const targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z'
    const dallas = {
      id: 'dallas',
      color: themes.primary,
      svgPath: targetSVG,
      title: 'Dallas',
      country: 'United States',
      latitude: dallasBranchCoordinates.split(', ')[0],
      longitude: dallasBranchCoordinates.split(', ')[1],
      scale: 1.5,
      zoomLevel: 5,
      zoomLongitude: -95,
      zoomLatitude: 33,
      lines: [
        {
          latitudes: [dallasBranchCoordinates.split(', ')[0], washingtonBranchCoordinates.split(', ')[0]],
          longitudes: [dallasBranchCoordinates.split(', ')[1], washingtonBranchCoordinates.split(', ')[1]],
        },
        {
          latitudes: [dallasBranchCoordinates.split(', ')[0], tokyoBranchCoordinates.split(', ')[0]],
          longitudes: [dallasBranchCoordinates.split(', ')[1], tokyoBranchCoordinates.split(', ')[1]],
        },
        {
          latitudes: [dallasBranchCoordinates.split(', ')[0], cairoBranchCoordinates.split(', ')[0]],
          longitudes: [dallasBranchCoordinates.split(', ')[1], cairoBranchCoordinates.split(', ')[1]],
        },
      ],
      images: [
        {
          label: 'Dallas Branch',
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
    const washington = {
      id: 'washington',
      color: themes.primary,
      svgPath: targetSVG,
      title: 'Washington',
      country: 'United States',
      latitude: washingtonBranchCoordinates.split(', ')[0],
      longitude: washingtonBranchCoordinates.split(', ')[1],
      scale: 1.5,
      zoomLevel: 5,
      zoomLongitude: -80,
      zoomLatitude: 40,
      lines: [
        {
          latitudes: [washingtonBranchCoordinates.split(', ')[0], dallasBranchCoordinates.split(', ')[0]],
          longitudes: [washingtonBranchCoordinates.split(', ')[1], dallasBranchCoordinates.split(', ')[1]],
        },
        {
          latitudes: [washingtonBranchCoordinates.split(', ')[0], tokyoBranchCoordinates.split(', ')[0]],
          longitudes: [washingtonBranchCoordinates.split(', ')[1], tokyoBranchCoordinates.split(', ')[1]],
        },
        {
          latitudes: [washingtonBranchCoordinates.split(', ')[0], cairoBranchCoordinates.split(', ')[0]],
          longitudes: [washingtonBranchCoordinates.split(', ')[1], cairoBranchCoordinates.split(', ')[1]],
        },
      ],
      images: [
        {
          label: 'Washington Branch',
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
    const tokyo = {
      id: 'tokyo',
      color: themes.primary,
      svgPath: targetSVG,
      title: 'Tokyo',
      country: 'Japan',
      latitude: tokyoBranchCoordinates.split(', ')[0],
      longitude: tokyoBranchCoordinates.split(', ')[1],
      scale: 1.5,
      zoomLevel: 5,
      zoomLongitude: 135,
      zoomLatitude: 33,
      lines: [
        {
          latitudes: [tokyoBranchCoordinates.split(', ')[0], dallasBranchCoordinates.split(', ')[0]],
          longitudes: [tokyoBranchCoordinates.split(', ')[1], dallasBranchCoordinates.split(', ')[1]],
        },
        {
          latitudes: [tokyoBranchCoordinates.split(', ')[0], washingtonBranchCoordinates.split(', ')[0]],
          longitudes: [tokyoBranchCoordinates.split(', ')[1], washingtonBranchCoordinates.split(', ')[1]],
        },
        {
          latitudes: [tokyoBranchCoordinates.split(', ')[0], cairoBranchCoordinates.split(', ')[0]],
          longitudes: [tokyoBranchCoordinates.split(', ')[1], cairoBranchCoordinates.split(', ')[1]],
        },
      ],
      images: [
        {
          label: 'Tokyo Branch',
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
    const cairo = {
      id: 'cairo',
      color: themes.primary,
      svgPath: targetSVG,
      title: 'Cairo',
      country: 'Egypt',
      latitude: cairoBranchCoordinates.split(', ')[0],
      longitude: cairoBranchCoordinates.split(', ')[1],
      scale: 1.5,
      zoomLevel: 5,
      zoomLongitude: 30,
      zoomLatitude: 33,
      lines: [
        {
          latitudes: [cairoBranchCoordinates.split(', ')[0], dallasBranchCoordinates.split(', ')[0]],
          longitudes: [cairoBranchCoordinates.split(', ')[1], dallasBranchCoordinates.split(', ')[1]],
        },
        {
          latitudes: [cairoBranchCoordinates.split(', ')[0], washingtonBranchCoordinates.split(', ')[0]],
          longitudes: [cairoBranchCoordinates.split(', ')[1], washingtonBranchCoordinates.split(', ')[1]],
        },
        {
          latitudes: [cairoBranchCoordinates.split(', ')[0], tokyoBranchCoordinates.split(', ')[0]],
          longitudes: [cairoBranchCoordinates.split(', ')[1], tokyoBranchCoordinates.split(', ')[1]],
        },
      ],
      images: [
        {
          label: 'Cairo Branch',
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
      dallas,
      washington,
      tokyo,
      cairo,
    ]

    return {
      cities,
      mainCity: washington,
    }
  })
}
