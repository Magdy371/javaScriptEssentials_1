class Book{
    constructor(title, rating) {
        this.title = title;
        this.rating = rating;
    }
    describe() {
        return `${this.title} is rated ${this.rating}`;
    }
}
const b1 = new Book('JS Guide', 'intermediate');
const b2 = new Book('Node Guide', 'advanced');
console.log(b1.describe());
console.log(b2.describe());