const insertValues = (event) => {
    event.preventDefault();
    const form = document.getElementById('form');
    const fname = form.elements['fname'].value;
    const lname = form.elements['lname'].value;
    const email = form.elements['email'].value;
    const password = form.elements['password'].value;
    const cPassword = form.elements['cPassword'].value;
    const dob = form.elements['dob'].value;
    const gender = form.elements['gender'].value;
    const hobbies = form.elements['hobbies'];
    let checkedValue = [];
    for (var i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) {
            checkedValue.push(hobbies[i].value);
        }
    }
    const city = form.elements['city'].value;
    const about = form.elements['about'].value;
    if (password != cPassword) {
        document.getElementById("message").innerHTML = "**Password and confirm password should be same";
        return false
    }
    var ToDate = new Date();
    console.log("new Date(dob).getTime()", new Date(dob).getTime())
    console.log("ToDate.getTime()", ToDate.getTime())
    if (new Date(dob).getTime() >= ToDate.getTime()) {
        document.getElementById("message2").innerHTML = "**Date of birth should be less greater than today's date";
        return false
    }
    var list1 = [];
    var list2 = [];
    var list3 = [];
    var list4 = [];
    var list5 = [];
    var list6 = [];
    var list7 = [];
    var list8 = [];
    var list9 = [];

    var n = 1;
    var x = 0;
    var AddRown = document.getElementById('table');
    var NewRow = AddRown.insertRow(n);

    list1[x] = fname
    list2[x] = lname
    list3[x] = email
    list4[x] = password
    list5[x] = dob
    list6[x] = gender
    list7[x] = checkedValue.toString();
    list8[x] = city
    list9[x] = about

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);
    var cel5 = NewRow.insertCell(4);
    var cel6 = NewRow.insertCell(5);
    var cel7 = NewRow.insertCell(6);
    var cel8 = NewRow.insertCell(7);
    var cel9 = NewRow.insertCell(8);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = list5[x];
    cel6.innerHTML = list6[x];
    cel7.innerHTML = list7[x];
    cel8.innerHTML = list8[x];
    cel9.innerHTML = list9[x];

    n++;
    x++;
    return true
};
