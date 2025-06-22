"use client";

import { useState } from "react";
import { Input, Button, Spin, Result } from "antd";
import serialNumbers from "./serialNumbers";
import "antd/dist/reset.css";

// Static data for all serial numbers
const staticData = {
  time: "2024-08-16",
  grade: "A",
  maximumPower: "552.77",
  shortCircuitCurrent: "13.78",
  maximumCurrent: "13.26",
  openCircuitVoltage: "50.32",
  fillFactor: "0.80",
  model: "CHSM72M(DG)/F-BH-E006",
  warranty: "25 years"
};

const ModuleAuthenticityPage = () => {
  const [serialNumber, setSerialNumber] = useState("");
  const [searchedSerialNumber, setSearchedSerialNumber] = useState(""); // New state for searched serial number
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    setLoading(true);
    setSearchedSerialNumber(serialNumber); // Update searched serial number on search
    setTimeout(() => {
      if (serialNumbers.includes(serialNumber)) {
        setResult({
          ...staticData,
          barcode: serialNumber,
        });
      } else {
        setResult({
          message: "Not Found",
          description: "The serial number you entered does not exist.",
        });
      }
      setLoading(false);
    }, 1000); // Simulate API call with 1-second delay
  };

  return (
    <div className="min-h-[calc(100vh-60px)] bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-800 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20">
          <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-400 mb-6">
            Module Authenticity
          </h1>
          <p className="text-center text-gray-300 mb-8">
            Verify your module with a premium experience.
          </p>
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-xl flex items-center space-x-4">
              <Input
                placeholder="Enter serial number"
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
                className="w-full border-gray-600 bg-gray-800/50 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 p-3 !rounded-r-none"
              />
              <Button
                type="primary"
                onClick={handleSearch}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 !rounded-l-none transition duration-300 "
              >
                Search
              </Button>
            </div>
          </div>
          <p className="text-center text-sm text-gray-400 mb-8">
            Locate the serial number on the module's front top or side frame.
          </p>
          {loading ? (
            <div className="flex justify-center">
              <Spin size="large" className="text-indigo-400" />
            </div>
          ) : result ? (
            result.message ? (
              <Result
                status="warning"
                title={result.message}
                subTitle={result.description}
                className="mt-8"
                style={{ background: "none" }}
              />
            ) : (
              <div className="mt-8 bg-gray-800/50 p-6 rounded-xl shadow-inner">
                <h2 className="text-2xl font-semibold text-indigo-200 mb-4 text-center">
                  Query Results
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                  <p><span className="font-medium text-white">Serial Number:</span> {searchedSerialNumber}</p> {/* Use searchedSerialNumber */}
                  <p><span className="font-medium text-white">Time:</span> {result.time}</p>
                  <p><span className="font-medium text-white">Grade:</span> {result.grade}</p>
                  <p><span className="font-medium text-white">Warranty:</span> {result.warranty}</p>
                  <p><span className="font-medium text-white">Max Power (W):</span> {result.maximumPower}</p>
                  <p><span className="font-medium text-white">Short Circuit (A):</span> {result.shortCircuitCurrent}</p>
                  <p><span className="font-medium text-white">Max Current (A):</span> {result.maximumCurrent}</p>
                  <p><span className="font-medium text-white">Open Voltage (V):</span> {result.openCircuitVoltage}</p>
                  <p><span className="font-medium text-white">Fill Factor:</span> {result.fillFactor}</p>
                  <p><span className="font-medium text-white">Model:</span> {result.model}</p>
                </div>
              </div>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ModuleAuthenticityPage;