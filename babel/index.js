function init() 
{    

    let config = 
    {
      setting: "c64",
      sprite_x: 24,
      sprite_y: 21,
      colors: [
              "#000000","#ffffff","#813338","#75cec8",
              "#8e3c97","#56ac4d","#2e2c9b","#edf171",
              "#8e5029","#553800","#c46c71","#4a4a4a",
              "#7b7b7b","#a9ff9f","#706deb","#b2b2b2"
              ],
      zoom_editor: 18,
      zoom_preview: 5,
      zoom_list: 4,
      display_grid: true
    };

    let sprite_app = new App(config);
}
