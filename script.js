class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  add(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.current.next = node;
      node.prev = this.current;
      this.tail = node;
    }
    this.current = node;
  }

  undo() {
    if (this.current.prev) {
      this.current = this.current.prev;
      return this.current.data;
    }
    return null;
  }

  redo() {
    if (this.current.next) {
      this.current = this.current.next;
      return this.current.data;
    }
    return null;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  save() {
    const data = [];
    let node = this.head;
    while (node) {
      data.push(node.data);
      node = node.next;
    }
    const fileName = document.getElementById("filename-input").value;
    const file = new Blob([JSON.stringify(data)], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

  open() {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const data = JSON.parse(reader.result);
        this.clear();
        data.forEach((text) => this.add(text));
        document.getElementById("text-area").value = this.current.data;
        document.getElementById("undo-btn").disabled = false;
      };
      reader.readAsText(file);
    };
    input.click();
  }
}

const linkedList = new LinkedList();

document.getElementById("text-area").addEventListener("input", (event) => {
  linkedList.add(event.target.value);
  document.getElementById("undo-btn").disabled = false;
  document.getElementById("redo-btn").disabled = true;
});

document.getElementById("undo-btn").addEventListener("click", () => {
  const value = linkedList.undo();
  if (value !== null) {
    document.getElementById("text-area").value = value;
    document.getElementById("redo-btn").disabled = false;
  }
  if (linkedList.current === linkedList.head) {
    document.getElementById("undo-btn").disabled = true;
  }
});

document.getElementById("redo-btn").addEventListener("click", () => {
  const value = linkedList.redo();
  if (value !== null) {
    document.getElementById("text-area").value = value;
    document.getElementById("undo-btn").disabled = false;
  }
  if (linkedList.current === linkedList.tail) {
    document.getElementById("redo-btn").disabled = true;
  }
});

document.getElementById("clear-btn").addEventListener("click", () => {
  linkedList.clear();
  document.getElementById("text-area").value = "";
  document.getElementById("undo-btn").disabled = true;
  document.getElementById("redo-btn").disabled = true;
});

document.getElementById("save-btn").addEventListener("click", () => {
  linkedList.save();
});

document.getElementById("open-btn").addEventListener("click", () => {
  linkedList.open();
});
