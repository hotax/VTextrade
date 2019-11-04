import __ from 'underscore'
import enumsTypes from './Enums'

/* const types = {
  '1': '料品',
  '2': '资产',
  '3': '耗材',
  '4': '器具'
} */

export function convert (type) {
  const p = __.find(enumsTypes.part, item => {
    return item.value === type
  })
  return p.name
}
export default convert
