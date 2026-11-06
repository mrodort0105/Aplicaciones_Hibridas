export interface PokemonCard {
  id: number;
  nombre: string;
  tipo: string; // ej: Fuego, Agua, Eléctrico
  precio: number;
  imagen: string;
  rareza: 'Común' | 'Rara' | 'Ultra Rara' | 'Secret Rare';
  enOferta?: boolean; // Para la Mejora 1 (Estilos dinámicos)
  fechaLanzamiento?: string; // Para la Mejora 3 (Pipes)
}