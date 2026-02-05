
export interface Benefit {
  id: number;
  text: string;
  isBonus?: boolean;
}

export const BENEFITS: Benefit[] = [
  { id: 1, text: "Pack +15.000 figurinhas criativas" },
  { id: 2, text: "Bônus: Pack +200 Sombras Sofisticadas", isBonus: true },
  { id: 3, text: "Bônus: Pack +50 Molduras Repost", isBonus: true },
  { id: 4, text: "Bônus: Paletas de Sucesso", isBonus: true },
  { id: 5, text: "Bônus: Stories Lucrativos (Mini Curso)", isBonus: true },
  { id: 6, text: "Acesso completo a todos os bônus" },
  { id: 7, text: "7 dias de garantia incondicional" },
  { id: 8, text: "Acesso imediato" },
  { id: 9, text: "Acesso VITALÍCIO" },
];
