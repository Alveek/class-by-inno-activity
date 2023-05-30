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
  const [shareOfInnovationCosts, setShareOfInnovationCosts] = useState(0);
  const [investmentShares, setInvestmentShares] = useState(0);
  const [message1, setMessage1] = useState('');
  const [message2, setMessage2] = useState('');
  const [message3, setMessage3] = useState('');
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);

  const getShareOfInnResults = (value: number) => {
    if (value >= 3.35) {
      setMessage1(
        'Уровень инновационной активности значительно выше среднеотраслевого, лидерство по инновациям.'
      );
    } else if (value <= 0.45) {
      setMessage1(
        'Инновационная активность отсутствует, нет инновационного развития.'
      );
    } else if (value >= 1.35 && value < 3.35) {
      setMessage1(
        'Уровень инновационной активности самый низкий в отрасли, "отставание по инновациям".'
      );
      setQuestion2(true);
    } else if (value >= 0.45 && value < 1.35) {
      setMessage1('Уровнь инновационной активности ниже среднеотраслевого.');
    }
  };

  const getInfluenceResult = (value: string) => {
    if (value === 'weak') {
      setMessage2(
        'При уровне инновационной активности выше среднеотраслевого, результаты инновационной деятельности слабо влияют на стандарты промышленности.'
      );
    } else {
      setMessage2('');
      setQuestion3(true);
    }
  };

  const getInvestmentSharesResult = (value: number) => {
    if (value < 13.1) {
      setMessage3(
        'При уровне инновационной активности выше среднеотраслевого, результаты инновационной деятельности  влияют на стандарты промышленности, однако требуются дополнительные инвестиции на инновационное развитие.'
      );
    } else {
      setMessage3(
        'При уровне инновационной активности выше среднеотраслевого, результаты инновационной деятельности  влияют на стандарты промышленности и объем инвестиций в инновационное развитие превышает среднеотраслевой уровень.'
      );
    }
  };

  return (
    <Container maxW="container.md" py={6}>
      <Heading as="h1" size="lg" textAlign="center" mb={6} mt={4}>
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

        {message1 && (
          <>
            <Text fontWeight="bold" mt={4}>
              Вывод:{' '}
            </Text>
            <Text>{message1}</Text>
          </>
        )}
      </Box>

      {question2 && (
        <Box mb={6}>
          <Text mb={4}>
            Выберите степень влияния результатов инновационной деятельности на
            соответствие требованиям регламентов и стандартов в промышленности
            (слабое, среднее или низкое):
          </Text>

          <Select
            onChange={(e) => getInfluenceResult(e.target.value)}
            placeholder="Выберите из списка"
            maxW="220px"
          >
            <option value="weak">Слабое</option>
            <option value="medium">Среднее</option>
            <option value="low">Низкое</option>
          </Select>

          {message2 && (
            <>
              <Text fontWeight="bold" mt={4}>
                Вывод:{' '}
              </Text>
              <Text>{message2}</Text>
            </>
          )}
        </Box>
      )}

      {question3 && (
        <Box mb={6}>
          <Text mb={4}>
            Введите значение доли инвестиционных вложений на развитие
            производства в общей величине инвестиций
          </Text>

          <Input
            onChange={(e) => setInvestmentShares(Number(e.target.value))}
            type="number"
            maxW="100px"
            borderRadius={0}
          />
          <Button
            onClick={() => getInvestmentSharesResult(investmentShares)}
            colorScheme="blue"
            borderRadius={0}
            isDisabled={!investmentShares}
          >
            Рассчитать
          </Button>

          {message3 && (
            <>
              <Text fontWeight="bold" mt={4}>
                Вывод:{' '}
              </Text>
              <Text>{message3}</Text>
            </>
          )}
        </Box>
      )}
    </Container>
  );
}

export default App;
