/* eslint-disable no-shadow */

interface IColors {
    blue: string
    red: string
    green: string
}

const AppColors: IColors = {
    blue: 'linear-gradient(90deg, rgba(64,137,204,1) 0%, rgba(35,197,183,1) 100%, rgba(255,255,255,1) 100%)',
    red: 'linear-gradient(90deg, rgba(238,65,65,1) 0%, rgba(237,190,43,1) 100%, rgba(255,255,255,1) 100%)',
    green: 'linear-gradient(90deg, rgba(51,228,126,1) 0%, rgba(215,230,43,1) 100%, rgba(255,255,255,1) 100%)'
}

export default { colors: AppColors }