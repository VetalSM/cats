(function (Scratch) {
  'use strict';

  class Objects3D {
    constructor() {
      this.objects = [];
    }

    getInfo() {
      return {
        id: 'objects3d',
        name: '3D ОБЪЕКТЫ',
        color1: '#6C5CE7',
        color2: '#5848C2',
        color3: '#44379B',
        blocks: [
          {
            opcode: 'hello3d',
            blockType: Scratch.BlockType.REPORTER,
            text: '3D расширение работает?'
          },
          {
            opcode: 'createObject',
            blockType: Scratch.BlockType.COMMAND,
            text: 'создать 3D объект [NAME]',
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Cube'
              }
            }
          },
          {
            opcode: 'objectCount',
            blockType: Scratch.BlockType.REPORTER,
            text: 'количество 3D объектов'
          },
          {
            opcode: 'deleteAll',
            blockType: Scratch.BlockType.COMMAND,
            text: 'удалить все 3D объекты'
          }
        ]
      };
    }

    hello3d() {
      return 'ДА! 3D ОБЪЕКТЫ загружены';
    }

    createObject(args) {
      this.objects.push(String(args.NAME));
    }

    objectCount() {
      return this.objects.length;
    }

    deleteAll() {
      this.objects = [];
    }
  }

  Scratch.extensions.register(new Objects3D());
})(Scratch);
