var countAllPaarl = function(strC)
{
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
