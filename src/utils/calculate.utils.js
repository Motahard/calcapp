import { calculateExpression, calculateResult } from "@/utils"

const handleEqualButton = (val, result, value, expression, operator) => {
  const resArr = result.toString().split('')
  const lastChar = resArr[resArr.length - 1]
  if (
    (expression &&
      result.toString().indexOf(')') === -1) ||
    lastChar.match(/[*+\-%/]/)
  ) return undefined
  else if (expression) {
    let calculatedExpVal = 0
    if (value && value !== 0) {
        calculatedExpVal = calculateExpression(value)
    }
    const calculatedExpRes = calculateExpression(result).toString()
    if (value === 0 || !value) {
        return calculatedExpRes
    }
    return calculateResult(
        calculatedExpVal,
        calculatedExpRes,
        operator,
    )
} 
  else {
      return calculateResult(value, result, operator)
  }
}

export const buttonHandler = ({ val, result, value, expression, operator}) => {
    const resArr = result.toString().split('')
    const lastChar = resArr[resArr.length - 1]
    switch(val) {
        case '+/-': {
            if (Number(result) > 0) {
                return -Math.abs(result)
              } else {
                return Math.abs(result)
              }
        }
        case '.': {
            if (lastChar !== '.' && lastChar !== '(' && !lastChar.match(/[*+\-%/]/)) {
                let str = ''
                for (let i = resArr.length - 1; i > 0; i--) {
                    if (resArr[i].toString().match(/[*+\-%/]/)) break
                    str = resArr[i] + str
                }
                return str.indexOf('.') === -1
            }
            break
        }
        case ')': {
            if (result.toString().indexOf(')') === -1 && result.match(/[*+\-%/]/) && lastChar >= 0) return true
            break
        }
        case '=': {
          return handleEqualButton(val, result, value, expression, operator)
        }
        case 'C': {
            if (result.toString().length === 1) {
                return '0'
              } else {
                return result.toString().substring(0, result.toString().length - 1)
              }
        }
        default: {
          if(expression) {
            if(val.match(/[*+\-%/]/)) {
              if (lastChar >= 0) {
                  return result + val
                } else if (lastChar.match(/[*+\-%/]/)) {
                  const sliced = result
                    .toString()
                    .substring(0, result.toString().length - 1)
                  return sliced + val
                } else if (
                  lastChar.match(/[)]/) &&
                  val.match(/[*+\-%/]/)
                ) {
                  return result + val
                }
            } else {
              return result + val
            }
          }
          else if (result === '0') {
              return val
          } 
          else if(operator) {
            if(val.match(/[*+\-%/]/)) {
              return handleEqualButton(val, result, value, expression, operator)
            } else if(!expression) {
              return result + val
            }
          }
          else if (!lastChar.match(/[)]/)) {
            return result + val
          }
        }
    }
}