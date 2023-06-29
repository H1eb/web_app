const App = {
    data() {
        return{
            counter:0,
            title: "Счетчик",
            listTitle: "Список заметок",
            placeholderString: "Введите название заметки",
            inputValue: "",
            notes: ["заметка"],
            calcTitle: "Калькулятор",
            placeholderString1: "Введите число",
            placeholderString2: "Введите число",
            inputValue1: "",
            inputValue2: "",
            resAdds: ""
        }
    },
    methods: {
        add() {
            if (this.counter<10){
                this.counter++;
            }
            else alert("Всё, это максимум, прекрати!");
            
        },
        sub() {
            if (this.counter>0){
                this.counter--;
            }
            else alert("Всё, это минимум, прекрати!");
        },
        inputChange(event) {
            this.inputValue = event.target.value;
        },
        addNewNote() {
            if (this.inputValue!=""){
                this.notes.push(this.inputValue);
                this.inputValue="";
            }           
        },
        deleteLastNote(){
            let cnt=-1;
            this.notes.forEach(element => {
                cnt+=1
            });
            this.notes.splice(cnt, 1);
        },
        inputChange1(event) {
            this.inputValue1 = event.target.value;
            this.resAdds =Number(this.inputValue1)+Number(this.inputValue2)
        },
        inputChange2(event) {
            this.inputValue2 = event.target.value;
            this.resAdds =Number(this.inputValue1)+Number(this.inputValue2)
        },
        addNumbers(){
           this.resAdds=Number(this.inputValue1)+Number(this.inputValue2);
        },
        inputKeypress(event){
            if (event.key ==='Enter' || (event.key ==='+' && event.shiftKey) /*|| event.key ==='+'*/){
                this.addNewNote();
                event.preventDefault();
            }
            // else if (event.key ==='@'){
            //     this.inputValue="";
            //     event.preventDefault();
            // }
            console.log(event);
        },
        removeNote(idx){
            this.notes.splice(idx,1);
        },
        toUpperCaseMy(item){
            return item.toUpperCase();
        },
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length*2;
        }
    },
    watch: {
        inputValue(value) {
            if (value.length>30)
            {
                this.inputValue="";
            }
            if (value[value.length-1] ==='@'){
                this.inputValue="";
            }
        }
    }

}

Vue.createApp(App).mount('#app');