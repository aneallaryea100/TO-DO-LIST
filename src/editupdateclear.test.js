describe('Test the edit, checkbox and clear list function', () => {
  test('clear list if checkbox is checked', () => {
    const editstorage = JSON.parse(localStorage.getItem('list')) || [];
    const task = {
      description: 'kaaks',
      completed: true,
      index: 1,
    };

    const clearList = () => {
      if (task.completed === false) {
        editstorage.push(task);
        expect(editstorage).toHaveLength(1);
      }
      editstorage.pop();
      expect(editstorage).toHaveLength(0);
    };

    clearList();
  });

  test('update boolean of checkbox when checked', () => {
    const task = [
      {
        description: 'name1',
        completed: false,
        index: 1,
      },
      {
        description: 'name2',
        completed: true,
        index: 2,
      },
      {
        description: 'name3',
        completed: false,
        index: 3,
      },
      {
        description: 'name4',
        completed: true,
        index: 4,
      },
    ];

    const checkListBox = (el) => {
      if (el.completed === false) {
        el.completed = true;
      } else {
        el.completed = false;
      }
    };

    for (let i = 0; i < task.length; i += 1) {
      checkListBox(task[i]);
    }
    expect(task[0].completed).toBe(true);
    expect(task[1].completed).toBe(false);
  });

  test('when the input field is clicked, edit its value', () => {
    const task = [
      {
        description: 'kaaks',
        completed: false,
        index: 1,
      },
    ];

    const textInput = (input) => {
      input.value = 'kaka';

      task[0].description = input.value;
    };

    const inputs = document.querySelectorAll('.describetxt');
    textInput(inputs, task);
    expect(inputs.value).toBe('kaka');
  });
});
