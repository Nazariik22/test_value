const container = document.getElementsByClassName('container')[0],
    title = document.getElementsByClassName('title')[0],
    text = document.getElementsByClassName('text')[0],
    update = document.getElementsByClassName('update')[0],
    resultInfo = document.getElementsByClassName('resultInfo')[0],
    result = document.getElementsByClassName('result')[0],
    update_blok = document.getElementsByClassName('update_blok')[0],
    titleUpdate = document.getElementsByClassName('titleUpdate')[0],
    textUpdate = document.getElementsByClassName('textUpdate')[0],
    save = document.getElementsByClassName('save')[0];
const projectObj = {
    title: "",
    text: "",
    arr: [],
    count: 0,
    str(s) {
        let element = '';
        for (let i = 0; i < s.length; i++) {
            if (s[i] == '[') {
                i += 1;
                while (s[i] != ']') {
                    element += s[i];
                    i += 1;
                }
            }
            if (s[i] == ']') {
                this.arr.push(element);
                element = '';
                i += 1;
            }
        }
        this.arr.forEach(item => s = s.replace('[' + item + ']',
            '<input type="text" class="test">'))
        return s
    },
    load() {
        container.style.display = 'none';
    },
    unLoad() {
        update_blok.style.display = 'none';
    },
    create() {
        this.unLoad();
        title.innerText = this.title;
        container.style.display = 'flex';
        text.innerHTML = this.str(this.text);
        let arrList = Array.from(document.getElementsByClassName('test'));
        resultInfo.addEventListener('click', () => {
            this.count = 0
            arrList.forEach((item, index) =>
                item.value == this.arr[index] ? this.count += 1 : ""
            )
            result.innerText = 'Ваш результат:' + this.count;
        })

    },
    render() {
        this.load();
        titleUpdate.addEventListener('change', () => {
            this.title = titleUpdate.value;
        })

        textUpdate.addEventListener('change', () => {
            this.text = textUpdate.value;
        })
        save.addEventListener('click', () => {
            this.create();
        })
        update.addEventListener('click', () => {
            this.load()
            update_blok.style.display = 'flex';
        })
    }
}
projectObj.render();


