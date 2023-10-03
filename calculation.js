class Calculator { 
    static performCalculations(height, radius, segments) { 
      height = +height;
      radius = +radius;
      segments = +segments;
      let vertexes = [];
      let aVer = [0, 0, height];
      const PI = Math.PI;
      for (let i = 0; i < segments; i++) {
        let vx1 = radius * Math.cos(2 * PI * i / segments);
        let vy1 = radius * Math.sin(2 * PI * i / segments);
        let vz1 = 0;
        let vertex1 = [vx1, vy1, vz1];

        let vx2 = radius * Math.cos(2 * PI * (i + 1) / segments);
        let vy2 = radius * Math.sin(2 * PI * (i + 1) / segments);
        let vz2 = 0;
        let vertex2 = [vx2, vy2, vz2];

        let vertex = [
          ...aVer,
          ...vertex1,
          ...vertex2,
        ];
        vertexes.push(vertex);
      }
      return vertexes;
    }
} 

export default Calculator;