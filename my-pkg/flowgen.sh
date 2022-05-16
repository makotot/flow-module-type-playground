for i in $(find lib/ -type f -name "*.d.ts");
  do sh -c "npx flowgen --interface-records --add-flow-header --no-inexact $i -o ${i%.*.*}.js.flow";
done;
