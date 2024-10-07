let screen = document.querySelector('input');
let theme = document.querySelector(".switch");
let main = document.querySelector("header");
let secondKey = document.querySelector(".def");
let firstKey = document.querySelector(".deff");
let aside = document.querySelector("aside");
let head = document.querySelector(".head");


let numberOfTheme = 1;


console.log(secondKey)

function changeTheme () {
    if (numberOfTheme == 1) {
        theme.style.justifyContent = "center";
        numberOfTheme++;
        main.classList.toggle("header-two");
        theme.classList.toggle("switch-two");
        screen.classList.toggle("screen-two");
        secondKey.classList.toggle("def-two");
        firstKey.classList.toggle("deff-two");
        aside.classList.toggle("aside-two");
        head.classList.toggle("head-two");
    } else if(numberOfTheme == 2) {
        theme.style.justifyContent = "flex-end";
        main.classList.toggle("header-three");
        theme.classList.toggle("switch-three");
        screen.classList.toggle("screen-three");
        secondKey.classList.toggle("def-three");
        firstKey.classList.toggle("deff-three");
        aside.classList.toggle("aside-three");
        head.classList.toggle("head-three");
        numberOfTheme++;
    } else if (numberOfTheme == 3) {
        theme.style.justifyContent = "flex-start";
        main.classList.toggle("header-three");
        main.classList.toggle("header-two");
        theme.classList.toggle("switch-three");
        theme.classList.toggle("switch-two");
        screen.classList.toggle("screen-three");
        screen.classList.toggle("screen-two");
        secondKey.classList.toggle("def-three");
        secondKey.classList.toggle("def-two");
        firstKey.classList.toggle("deff-two");
        firstKey.classList.toggle("deff-three");
        aside.classList.toggle("aside-two");
        aside.classList.toggle("aside-three");
        head.classList.toggle("head-two");
        head.classList.toggle("head-three");
        numberOfTheme = 1;
    }
}

function display(x) {
    screen.value += x;
    return x
}

function clearScreen() {
    screen.value = '';
}

function solution() {
    if(screen.value != "") {
        screen.value = eval(screen.value)
    }
}

function del() {
    screen.value = screen.value.slice(0, -1);
}


theme.addEventListener("click" , function() {
    changeTheme(numberOfTheme);
});



// ### Theme 2

// #### Backgrounds

// - Light gray (main background): hsl(0, 0%, 90%)
// - Grayish red (toggle background, keypad background): hsl(0, 5%, 81%)
// - Very light gray (screen background): hsl(0, 0%, 93%)

// #### Keys

// - Dark moderate cyan (key background): hsl(185, 42%, 37%)
// - Very dark cyan (key shadow): hsl(185, 58%, 25%)

// - Orange (key background, toggle): hsl(25, 98%, 40%)
// - Dark orange (key shadow): hsl(25, 99%, 27%)

// - Light grayish yellow (key background): hsl(45, 7%, 89%)
// - Dark grayish orange (key shadow): hsl(35, 11%, 61%)

// #### Text

// - Very dark grayish yellow: hsl(60, 10%, 19%)
// - White (text): hsl(0, 0%, 100%)