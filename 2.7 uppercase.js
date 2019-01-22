function upper_case(str)
{
   regexp = /^[A-Z]/;
   if (regexp.test(str))
    {
      console.log("1st letter is uppercase");
    } 
    else
    {
      console.log("1st letter isn`t uppercase");
    }
}
upper_case('alina');
upper_case('Alina');
