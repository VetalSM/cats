(function (Scratch) {
  'use strict';

  class Objects3DV3 {
    constructor() {
      this.objects = [];
    }

    getInfo() {
      return {
        id: 'objects3dv3',
        name: '3D ОБЪЕКТЫ V3',
        color1: '#6C5CE7',
        color2: '#5848C2',
        color3: '#44379B',
        blocks: [
          {
            opcode: 'status',
            blockType: Scratch.BlockType.REPORTER,
            text: 'статус 3D расширения'
          },
          {
            opcode: 'createCube',
            blockType: Scratch.BlockType.COMMAND,
            text: 'создать куб [NAME]',
            arguments: {
              NAME: {type: Scratch.ArgumentType.STRING, defaultValue: 'Cube'}
            }
          },
          {
            opcode: 'createSphere',
            blockType: Scratch.BlockType.COMMAND,
            text: 'создать сферу [NAME]',
            arguments: {
              NAME: {type: Scratch.ArgumentType.STRING, defaultValue: 'Sphere'}
            }
          },
          {
            opcode: 'setPosition',
            blockType: Scratch.BlockType.COMMAND,
            text: 'позиция объекта [NAME] x [X] y [Y] z [Z]',
            arguments: {
              NAME: {type: Scratch.ArgumentType.STRING, defaultValue: 'Cube'},
              X: {type: Scratch.ArgumentType.NUMBER, defaultValue: 0},
              Y: {type: Scratch.ArgumentType.NUMBER, defaultValue: 0},
              Z: {type: Scratch.ArgumentType.NUMBER, defaultValue: 0}
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

    status() {
      return '3D ОБЪЕКТЫ V3 РАБОТАЮТ';
    }

    createCube(args) {
      this.objects.push({type:'cube', name:String(args.NAME), x:0, y:0, z:0});
    }

    createSphere(args) {
      this.objects.push({type:'sphere', name:String(args.NAME), x:0, y:0, z:0});
    }

    setPosition(args) {
      const name = String(args.NAME);
      const obj = this.objects.find(o => o.name === name);
      if (obj) {
        obj.x = Number(args.X) || 0;
        obj.y = Number(args.Y) || 0;
        obj.z = Number(args.Z) || 0;
      }
    }

    objectCount() {
      return this.objects.length;
    }

    deleteAll() {
      this.objects = [];
    }
  }

  Scratch.extensions.register(new Objects3DV3());
})(Scratch);
