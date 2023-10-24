const fonts: { name: string; url: string }[] = [
    { name: 'normal', url: '/fonts/normal.ttf' },
    { name: 'titles', url: '/fonts/titles.ttf' },
    { name: 'amor', url: '/fonts/escrita.otf' },
    // ... más fuentes
  ];
  
  export async function cargarFuentes(): Promise<boolean> {
    try {
      await Promise.all(fonts.map(async ({ name, url }) => {
        const font = new FontFace(name, `url(${url})`);
        await font.load();
        document.fonts.add(font);
      }));
      console.log('Todas las fuentes se han cargado correctamente.');
      return true;
    } catch (error) {
      console.error('Error al cargar las fuentes:', error);
      return false;
    }
  }
  