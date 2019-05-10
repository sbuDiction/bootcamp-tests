var countAllFromTown = function(regNu)
{
  var list = regNu.split(',');
  var town = [];
  for(var i=0; i < list.length; i++)
  {
    if(list[i].startsWith('CL'))
          {
          	town.push(list[i]);
          }
  }
  console.log(town);
  return town.length;
}
