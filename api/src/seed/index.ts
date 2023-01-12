import orderSeed from './order';
import creditCardSeed from './credit-card';
import productSeed from './product';

async function bootstrap() {
  await creditCardSeed();
  await productSeed();
  await orderSeed();

  console.log('seed successfuly')
}
bootstrap();