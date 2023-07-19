//USES OF THIS KEYWORD and CALL APPLY AND BIND METHOD
const employee = {
  firstName: 'Supriya',
  lastName: 'kumari',
  getFullName: function (city) {
    //console.log(this);
    console.log(
      'My name is ' +
        `${this.firstName}` +
        ' ' +
        `${this.lastName}` +
        ' and City is ' +
        `${city}`
    );
  },
};
//employee.getFullName();
// const empDetails = employee.getFullName;
// empDetails();

const customer = {
  firstName: 'Surbhi',
  lastName: 'Ramuka',
};
const student = {
  firstName: 'Rahul',
  lastName: 'Roy',
};
//function borrowing using call and apply
employee.getFullName.call(customer, 'Delhi');
employee.getFullName.apply(customer, ['Goa']);
// Call and apply works same but the only difference is when we use arguments in the function
//when we pass argument in call...we simply pass the argument seperated with comma and in apply we pass the arguments in array format.
//Call and apply will excute then and there but bind fn bind with this method and later on we can execute whenever we want and also multiple times.

const handler1 = employee.getFullName.bind(customer);
handler1('Goa');
const handler2 = employee.getFullName.bind(student);
handler2('Pakistan');

//Bind method after clicking on a button
const obj = document.getElementById('btn');
obj.addEventListener('click', employee.getFullName.bind(customer, 'England'));
