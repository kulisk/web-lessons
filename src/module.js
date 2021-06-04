import '../src/style.css'
export default function setup() {
    let image = document.createElement('img');
    image.src = "../public/image.svg";

    document.body.append(image);
}


