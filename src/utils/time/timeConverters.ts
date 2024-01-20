import moment from 'moment';

/**
 * Converte milissegundos para o formado de hora:minutos:segundos
 */
export const msToHHMMSS = (milisseconds: number) => {
  const time = moment();
  time.hours(0);
  time.minutes(0);
  time.seconds(0);
  time.add(milisseconds, 'milliseconds');
  const formated = time.format('HH:mm:ss');

  return formated;
};
