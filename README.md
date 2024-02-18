# Linked List Text Editor - Capstone Project

## Overview

This project is a simple text editor that uses a double linked list to store text. It allows the user to perform basic text editing operations such as inserting and deleting text, as well as undoing and redoing previous changes.

## Technologies Used

- HTML
- CSS
- JavaScript

## Features

- Undo and redo functionality using linked list
- Clear text area
- Save and open files

## How to Use

To use the text editor, simply open the `index.html` file in a web browser or [Click Here](https://indexposition.github.io/Linked-List-Text-Editor/). The text editor interface will open, allowing you to type and edit text.
You can start typing in the text area, and use the following buttons :

1. Undo: Undos the last change made to the text area.
2. Redo: Redos the last change undoed.
3. Clear: Clears the text area (memory) and starts over.
4. Save: Saves the text to a file with a specified name.
5. Open: Opens a previously saved file.

## How it Works

This text editor stores text using a doubly linked list data structure. Each node represents a single character and has a reference to the next and previous nodes. The cursor position is tracked by the current node. When a user types a character, a new node is inserted after the current node and the current node is updated. When a user deletes a character, the current node is updated to the previous node. The editing history is tracked using a stack. When an editing operation is performed, the current state is pushed onto the stack. To undo an operation, the previous state is popped from the stack and restored.

## Acknowledgments

- https://www.geeksforgeeks.org/data-structures/linked-list/
- https://www.geeksforgeeks.org/implementation-linkedlist-javascript/
- https://www.tutorialspoint.com/how-to-create-and-save-text-file-in-javascript
