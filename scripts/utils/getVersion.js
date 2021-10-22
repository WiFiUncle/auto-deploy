import dateFormat from './dateFormat'
export const  getVersion = () => {
    return dateFormat('backup_YYYY-mm-dd_HH:MM:SS')
}
