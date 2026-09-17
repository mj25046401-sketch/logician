import React, { useState } from 'react';
import { X, Copy, Check, Download, Code, ExternalLink } from 'lucide-react';
import { STANDALONE_HTML_CODE } from '../data/standaloneHtmlCode';

interface StandaloneExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneExportModal: React.FC<StandaloneExportModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(STANDALONE_HTML_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([STANDALONE_HTML_CODE], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'locgician-standalone.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="bg-[#111827] text-white px-6 py-5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-[#FFD166] text-[#111827] flex items-center justify-center font-bold text-sm">
              <Code className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-heading font-extrabold text-base sm:text-lg text-white leading-tight">
                Standalone Executable HTML5 File
              </h3>
              <p className="text-xs text-gray-400">
                Single-file HTML with standalone Tailwind CDN, Google Fonts & Vanilla JS
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 text-gray-800">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 leading-relaxed">
            <strong>Ready to run anywhere:</strong> This complete standalone HTML file contains all styles (via Tailwind CDN), Google Fonts (Syne, Outfit, Inter), SVG star emblems, responsive sections, category tabs filter, before/after slider, and booking modal with pure vanilla JavaScript. You can download it and double-click to run in any browser with zero build tools!
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Source Code Preview (~15 KB)
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-xs font-bold text-gray-800 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Code'}</span>
              </button>

              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFD166] hover:bg-[#ffc63a] text-xs font-black text-[#111827] uppercase tracking-wider transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .HTML</span>
              </button>
            </div>
          </div>

          {/* Code Viewer Box */}
          <div className="relative rounded-2xl bg-[#111827] text-gray-300 p-4 font-mono text-xs overflow-x-auto max-h-80 border border-gray-800 leading-normal">
            <pre>
              <code>{STANDALONE_HTML_CODE.slice(0, 3000)}...</code>
            </pre>
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#111827] to-transparent pointer-events-none flex items-end justify-center pb-2 text-[11px] text-gray-400">
              Showing preview • Click "Copy Code" or "Download .HTML" for full source
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-xs font-bold text-gray-800 transition-colors"
          >
            Close
          </button>
          <button
            onClick={handleDownload}
            className="px-6 py-2 rounded-full bg-[#111827] text-[#FFD166] hover:bg-black text-xs font-extrabold uppercase tracking-wider transition-colors flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            Download locgician.html
          </button>
        </div>

      </div>
    </div>
  );
};
