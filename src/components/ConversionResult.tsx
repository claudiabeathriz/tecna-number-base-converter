interface ConversionResultProps {
  result: string;
}

function ConversionResult({ result }: ConversionResultProps) {
  return (
    <div className="result">
      <span>Result</span>

      <strong>{result || "—"}</strong>
    </div>
  );
}

export default ConversionResult;
