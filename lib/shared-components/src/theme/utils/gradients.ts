import MColours from './colours';

export const MGradientColours = {
  lightBlue: {
    start: MColours.lightBlue,
    end: MColours.ALightBlue,
    contrastText: 'white',
  },
  blue: {
    start: '#125082',
    end: MColours.blue,
    contrastText: 'white',
  },
  // brand: {
  //   start: MColours.brand.purple,
  //   end: MColours.brand.orange,
  //   contrastText: 'white',
  // },
  pending: {
    start: MColours.yellow,
    end: '#E7C428',
    contrastText: 'black',
  },
  buyLight: {
    start: MColours.green,
    end: '#1C7633',
    contrastText: 'white',
  },
  // buyDark: {
  //   start: MColours.AGreen,
  //   end: '#7BBA3B',
  //   contrastText: 'white',
  // },
  sell: {
    start: MColours.sellFuchsia,
    end: '#EA1A59',
    contrastText: 'white',
  },
  // engaged: {
  //   start: MColours.darkTeal,
  //   end: '#4ECBC6',
  //   contrastText: 'white',
  // },
  inactiveDark: {
    start: MColours.greyScale[600],
    end: MColours.greyScale[800],
    contrastText: MColours.greyScale[100],
  },
  inactiveLight: {
    start: MColours.greyScale[100],
    end: MColours.greyScale[300],
    contrastText: 'black',
  },
};

export const MGradients = {
  lightBlue: `linear-gradient(0deg, ${MGradientColours.lightBlue.start} 2.22%, ${MGradientColours.lightBlue.end} 98.44%)`,
  blue: `linear-gradient(0deg, ${MGradientColours.blue.start} 3.7%, ${MGradientColours.blue.end} 97.27%)`,
  // brand: `linear-gradient(100deg, ${MGradientColours.brand.start} 12.13%, ${MGradientColours.brand.end} 90.08%)`,
  pending: `linear-gradient(180deg, ${MGradientColours.pending.start} 2.04%, ${MGradientColours.pending.end} 99.6%)`,
  // buyDark: `linear-gradient(180deg, ${MGradientColours.buyDark.start} 0%, ${MGradientColours.buyDark.end} 97.2%)`,
  buyLight: `linear-gradient(180deg, ${MGradientColours.buyLight.start} 0%, ${MGradientColours.buyLight.end} 97.78%)`,
  sell: `linear-gradient(180deg, ${MGradientColours.sell.start} 0%, ${MGradientColours.sell.end} 97.2%)`,
  // engaged: `linear-gradient(0deg, ${MGradientColours.engaged.start} 2.22%, ${MGradientColours.engaged.end} 98.44%)`,
  inactiveDark: `linear-gradient(180deg, ${MGradientColours.inactiveDark.start} 0%, ${MGradientColours.inactiveDark.end} 97.2%)`,
  inactiveLight: `linear-gradient(180deg, ${MGradientColours.inactiveLight.start} 0%, ${MGradientColours.inactiveLight.end} 97.2%)`,
};

// insertRootRules(MGradients, 'gradient');
// insertRootRules(MGradientColours, 'gradientColours');
