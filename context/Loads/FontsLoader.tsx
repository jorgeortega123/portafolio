const fonts: { name: string; url: string }[] = [
    { name: 'texto-general', url: '/fonts/lato-latin-400-normal.woff' },
    { name: 'alternativa-1', url: '/fonts/gh1.ttf' },
    { name: '/fonts/bold.ttf', url: '/fonts/bold.ttf' },
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
  