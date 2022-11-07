
// Task one: 
// Write a code by using if or switch case statement  and prompt message to the user to insert their birthdate month then you should tell them their month that give you an output such as below:
// The input: 8
// The output: August 
// The input: 3
// The output: March



// with if :::--


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



let x = prompt("you'r birth monthe by num ...?");



if(x == '1')
{
  console.log('January')
}

else if (x=='2')
{
  console.log('February')
}

else if (x=='3')
{console.log('March')}

else if (x=='4')
{console.log('April')}

else if (x=='5')
{console.log('May')}

else if (x=='6')
{console.log('June')}

else if (x=='7')
{console.log('July')}

else if (x=='8')
{console.log('August')}

else if (x=='9')
{console.log('September')}

else if (x=='10')
{console.log('October')}

else if (x=='11')
{console.log('November')}

else if (x=='12')
{console.log('December')}

else if (x >'12')
{console.log('ther no monthe like this y*****')}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// with switch:::--


//////////////////////////////////////////////////////////////////////////////////////////////////////////////



switch( x )
{
  case '1':
    document.write('January');
    break;

    case '2':
      document.write('February');
      break;

      case '3':
        document.write('March');
        break;

        case '4':
          document.write('April');
          break;

          case '5':
            document.write('May');
            break;

            case '6':
              document.write('June');
              break;

              case '7':
                document.write('July');
                break;

                case '8':
                  document.write('August');
                  break;

                  case '9':
                    document.write('September');
                    break;

                    case '10':
                      document.write('October');
                      break;

                      case '11':
                        document.write('November');
                        break;

                        case '12':
                          document.write('December');
                          break;

                          default :
                            document.write('ther no monthe like this y**** ');
                            break;


}




