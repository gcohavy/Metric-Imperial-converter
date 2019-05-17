/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var ind = input.search(/[a-z]/i);
   //   console.log(ind);
    if(ind == 0) {
      var result = 1;
    }
    else {
      var result = input.substring(0,ind);
  //    console.log(result);
    result = result.indexOf('/') < 0 ? result :
      result.lastIndexOf('/') === result.indexOf('/') ? result :
        'Invalid input';
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var ind = input.search(/[a-z]/i);
    var result = input.substring(ind);
     // console.log(result);
    result = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'].includes(result.toLowerCase()) ?
       result : 'Unknown unit input'
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var keyValues = { gal: 'l', l: 'gal', mi: 'km', km: 'mi', lbs: 'kg', kg: 'lbs' };
    var result = initUnit == 'Unknown unit input' ? 'Unknown unit input' : keyValues[initUnit.toLowerCase()];
    //console.log(result);
    return result;
  };

  this.spellOutUnit = function(unit) {
    var keyValues = { gal: 'Gallons', l: 'Liters', mi: 'Miles', km: 'Kilometers', lbs: 'Pounds', kg: 'Kilograms' };
    return keyValues[unit.toLowerCase()];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch(initUnit.toLowerCase()) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum /galToL;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      default:
        result = 'Invalid parameters';
    }
    if(result !== 'Invalid parameters') {
      result = Math.floor(result * 100000)/100000;
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if(returnNum == 'Invalid input' || returnNum == 'No numerical input') {
      result = 'invalid input unit';
    }
    else result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum.toString() + ' ' + this.spellOutUnit(returnUnit);
    if (result.indexOf('Invalid input') > -1 && returnUnit == 'Unknown unit input') {
      result = 'invalid number and unit'
    }
    else if(result.indexOf('Invalid input') > -1) {
      result = 'invalid number';
    }
    else if (returnUnit == 'Unknown unit input') {
      result = 'invalid input unit'
    }
    else if(result.indexOf('undefined') > -1){
       result = 'Invalid input parameters'
    }
    console.log(result);
    return result;
  };
  
}

module.exports = ConvertHandler;
