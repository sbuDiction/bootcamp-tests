var countAllPaarl = function(strC)
{
  console.log(strC)
  var list = strC.split(', ');
  console.log(list);
  var paarl = [];
  for(var i=0; i < list.length; i++)
  {
    if(list[i].startsWith('CJ'))
    {
      paarl.push(list[i]);
    }
    
  }
  console.log(paarl)
  return paarl.length;
  
}
var strC = 'CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123';
var list = ["CJ 345 123","CJ 2345","CL 123-546","CK 345","CJ 123"];
var Paarl = ["CJ 345 123","CJ 123"];