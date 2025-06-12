import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingDown, Users, DollarSign, Zap } from 'lucide-react';

const DataVisualization = () => {
  const [activeChart, setActiveChart] = useState('population');

  // Dados demográficos simulados
  const populationData = [
    { year: '1980', population: 7.3 },
    { year: '1990', population: 10.4 },
    { year: '2000', population: 12.2 },
    { year: '2010', population: 13.1 },
    { year: '2020', population: 14.9 },
    { year: '2024', population: 16.2 }
  ];

  // Dados étnicos
  const ethnicData = [
    { name: 'Shona', value: 82, color: '#F59E0B' },
    { name: 'Ndebele', value: 14, color: '#EF4444' },
    { name: 'Outros', value: 4, color: '#10B981' }
  ];

  // Dados econômicos (PIB per capita)
  const economicData = [
    { year: '1980', gdp: 850 },
    { year: '1990', gdp: 920 },
    { year: '2000', gdp: 580 },
    { year: '2010', gdp: 450 },
    { year: '2020', gdp: 1200 },
    { year: '2024', gdp: 1350 }
  ];

  const charts = {
    population: {
      title: 'Evolução Populacional',
      icon: Users,
      data: populationData,
      type: 'bar',
      color: '#F59E0B',
      yLabel: 'População (milhões)'
    },
    ethnic: {
      title: 'Composição Étnica',
      icon: Users,
      data: ethnicData,
      type: 'pie',
      color: '#F59E0B'
    },
    economic: {
      title: 'PIB per Capita (USD)',
      icon: DollarSign,
      data: economicData,
      type: 'bar',
      color: '#EF4444',
      yLabel: 'PIB per capita (USD)'
    }
  };

  const renderChart = () => {
    const chart = charts[activeChart];
    
    if (chart.type === 'bar') {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chart.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis label={{ value: chart.yLabel, angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Bar dataKey={activeChart === 'population' ? 'population' : 'gdp'} fill={chart.color} />
          </BarChart>
        </ResponsiveContainer>
      );
    } else if (chart.type === 'pie') {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chart.data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {chart.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      );
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-8 mb-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <TrendingDown className="text-amber-600" size={32} />
        <h2 className="text-3xl font-bold text-amber-800">Dados e Estatísticas</h2>
      </div>

      {/* Chart Selection */}
      <div className="flex flex-wrap gap-4 mb-6">
        {Object.entries(charts).map(([key, chart]) => {
          const Icon = chart.icon;
          return (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveChart(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeChart === key 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
              }`}
            >
              <Icon size={16} />
              <span className="font-medium">{chart.title}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Chart Display */}
      <motion.div
        key={activeChart}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-50 rounded-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
          {charts[activeChart].title}
        </h3>
        {renderChart()}
      </motion.div>

      {/* Key Statistics */}
      <div className="grid md:grid-cols-4 gap-4 mt-8">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">16.2M</div>
          <div className="text-sm text-blue-800">População Atual</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">16</div>
          <div className="text-sm text-green-800">Idiomas Oficiais</div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-red-600">1980</div>
          <div className="text-sm text-red-800">Ano da Independência</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-600">390,757</div>
          <div className="text-sm text-purple-800">km² de Área</div>
        </div>
      </div>
    </motion.section>
  );
};

export default DataVisualization;

