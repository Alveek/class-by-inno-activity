import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Select,
  Text
} from '@chakra-ui/react';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [shareOfInnovationCosts, setShareOfInnovationCosts] = useState(0);

  const getShareOfInnResults = (value: number) => {
    if (value >= 3.35) {
      setMessage(
        'Уровень инновационной активности значительно выше среднеотраслевого, лидерство по инновациям'
      );
    } else if (value <= 0.45) {
      setMessage(
        'Инновационная активность отсутствует, нет инновационного развития'
      );
    } else if (value >= 0.45 && value <= 1.35) {
      setMessage('Уровнь инновационной активности ниже среднеотраслевого');
    } else if (value >= 0.45 && value < 3.35) {
      setMessage(
        'Уровень инновационной активности самый низкий в отрасли, "отставание по инновациям"'
      );
    } else if (value >= 1.35 && value < 3.35) {
      setQuestion2(true);
    }
  };

  console.log(shareOfInnovationCosts);

  return (
    <Container maxW="container.lg" bg="green.50" py={6}>
      <Heading as="h1" size="lg" textAlign="center" mb={6}>
        Алгоритм классификации отраслей промышленности и предприятий по уровню
        инновационной активности
      </Heading>

      <Box mb={6}>
        <Text mb={4}>
          Введите значение доли затрат на инновации в стоимостной величине
          отгруженной инновационной продукции:
        </Text>

        <Input
          onChange={(e) => setShareOfInnovationCosts(Number(e.target.value))}
          type="number"
          maxW="100px"
          borderRadius={0}
        />
        <Button
          onClick={() => getShareOfInnResults(shareOfInnovationCosts)}
          colorScheme="blue"
          borderRadius={0}
          isDisabled={!shareOfInnovationCosts}
        >
          Рассчитать
        </Button>
      </Box>

      {question2 && (
        <Box mb={6}>
          <Text mb={4}>
            Выберите степень влияния результатов инновационной деятельности на
            соответствие требованиям регламентов и стандартов в промышленности
            (слабое, среднее или низкое)
          </Text>

          <Select placeholder="Выберите из списка" maxW="220px">
            <option value="option1">Слабое</option>
            <option value="option2">Среднее</option>
            <option value="option3">Низкое</option>
          </Select>
        </Box>
      )}

      {question3 && (
        <Box mb={6}>
          <Text mb={4}>
            Введите значение доли инвестиционных вложений на развитие
            производства в общей величине инвестиций
          </Text>

          <Input type="number" maxW="100px" borderRadius={0} />
          <Button colorScheme="blue" borderRadius={0}>
            Рассчитать
          </Button>
        </Box>
      )}

      <Text fontWeight="bold">Вывод: </Text>
      <Text>{message}</Text>
    </Container>
  );
}

export default App;
